import { Hooks } from "Libs/TreeLib/Hooks";
import { Constants } from "Common/Constants";
import { ExperienceConstants } from "./ExperienceConstants";
import { Vector2D } from "Common/Vector2D";
import { TextTagHelper } from "Common/TextTagHelper";

export class ExperienceManager {
  static instance: ExperienceManager;

  protected creepXP: number[];
  protected heroXP: number[];

  protected unitXPModifier: Map<number, number>;
  protected rewardXPTrigger: trigger;

  constructor (
  ) {
    this.creepXP = [];
    this.heroXP = [];
    this.unitXPModifier = new Map();
    this.rewardXPTrigger = CreateTrigger();
    this.initialize();
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new ExperienceManager();
      Hooks.set("ExperienceManager", this.instance);
    }
    return this.instance;
  }

  initialize(): this {
    this.setupXPTables(
      this.heroXP, 
      ExperienceConstants.heroBase,
      ExperienceConstants.heroPrevMult,
      ExperienceConstants.heroLevelMult,
      ExperienceConstants.heroConstant,
      Constants.maxHeroLevel,
    );
    
    this.setupXPTables(
      this.creepXP,
      ExperienceConstants.creepBase,
      ExperienceConstants.creepPrevMult,
      ExperienceConstants.creepLevelMult,
      ExperienceConstants.creepConstant,
      Constants.maxCreepLvl,
    )

    this.setupUnitXPModifiers();

    this.setupRewardXPTrigger(this.rewardXPTrigger);

    return this;
  }

  setupXPTables(
    table: number[], 
    base: number, 
    prevMult: number,
    levelMult: number,
    constant: number,
    maxLevel: number,
  ) {
    table.push(base);
    table.push(base);
    for (let i = 2; i <= maxLevel; ++i) {
      const value = table[i-1] * prevMult + i * levelMult + constant;
      table.push(value);
    }
  }

  getHeroKillXP(level: number): number {
    if (level > 0 && level < Constants.maxHeroLevel) {
      return this.heroXP[level];
    }
    return 0;
  }

  getCreepKillXP(level: number): number {
    if (level > 0 && level < Constants.maxCreepLvl) {
      return this.creepXP[level];
    }
    return 0;
  }

  setupUnitXPModifiers() {
    // androids 13/14/15
    this.unitXPModifier.set(FourCC("H01V"), 0.5);
    this.unitXPModifier.set(FourCC("H01S"), 0.5);
    this.unitXPModifier.set(FourCC("H01T"), 0.5);
  }

  setupRewardXPTrigger(rewardTrigger: trigger) {
    for (let i = 0; i < bj_MAX_PLAYERS; ++i) {
      TriggerRegisterPlayerUnitEvent(rewardTrigger, Player(i), EVENT_PLAYER_UNIT_DEATH, null);
    }
    TriggerRegisterPlayerUnitEvent(rewardTrigger, Player(PLAYER_NEUTRAL_AGGRESSIVE), EVENT_PLAYER_UNIT_DEATH, null);

    TriggerAddAction(rewardTrigger, () => {
      const dyingUnit = GetDyingUnit();
      const dyingPlayer = GetOwningPlayer(dyingUnit);
      const killingUnit = GetKillingUnit();
      const killingPlayer = GetOwningPlayer(killingUnit);

      // count number of nearby allies
      if (IsPlayerEnemy(dyingPlayer, killingPlayer)) {
        const rewardedGroup = CreateGroup();
        const dyingPos = new Vector2D(GetUnitX(dyingUnit), GetUnitY(dyingUnit));

        let rewardXP: number = 0;
        if (IsUnitType(dyingUnit, UNIT_TYPE_HERO)) {
          rewardXP = this.heroXP[GetHeroLevel(dyingUnit)];
        } else {
          rewardXP = this.creepXP[GetUnitLevel(dyingUnit)];
        }

        const dyingPlayerId = GetPlayerId(dyingPlayer);
        // const killingPlayerId = GetPlayerId(killingPlayer);
        
        if (dyingPlayerId >= Constants.maxActivePlayers) {
          // share exp with anyone else who is also 
          // treats dying player as an enemy
          this.getNearbyXPHeroes(
            rewardedGroup, 
            dyingPos, 
            ExperienceConstants.expRange,
            dyingPlayer,
          );
        } else {
          // share exp with allies only
          this.getNearbyAlliedXPHeroes(
            rewardedGroup, 
            dyingPos, 
            ExperienceConstants.expRange, 
            killingPlayer,
          );
        }

        // count num different players nearby
        let numUniquePlayers = 0;
        let numPlayerUnits: number[] = [];
        for (let i = 0; i < Constants.maxActivePlayers; ++i) {
          numPlayerUnits[i] = 0;
        }
        ForGroup(rewardedGroup, () => {
          const playerId = GetPlayerId(GetOwningPlayer(GetEnumUnit()));
          if (playerId >= 0 && playerId < Constants.maxActivePlayers) {
            if (numPlayerUnits[playerId] == 0) {
              ++numUniquePlayers;
            }
            ++numPlayerUnits[playerId];
          }
        });

        // % that gets distributed,
        // minimum each hero gets 10%
        // per adam:
        // 1 : 100%
        // 2 : 90% * 2
        // 3 : 80% * 3 and so on
        const rewardMult = Math.max(
          ExperienceConstants.nearbyPlayerXPMult, 
          Math.min(
            1 - ExperienceConstants.nearbyPlayerXPMult * (numUniquePlayers - 1),
            1,
          ),
        );

        rewardXP = Math.floor(
          rewardXP * rewardMult * ExperienceConstants.globalXPRateModifier
        );

        ForGroup(rewardedGroup, () => {
          const rewardedUnit = GetEnumUnit();
          
          const xpModifier = this.unitXPModifier.get(GetUnitTypeId(rewardedUnit));
          if (xpModifier != undefined) {
            AddHeroXP(
              rewardedUnit, 
              rewardXP * xpModifier, 
              true
            );
          } else {
            AddHeroXP(
              rewardedUnit, 
              rewardXP, 
              true
            );
          }
          // exp floating text is provided for us
          // although it might be possible to disable
          // and manually do it
          /*
          TextTagHelper.showPlayerColorTextToForce(
            "+" + rewardXP + " xp", 
            GetUnitX(rewardedUnit),
            GetUnitY(rewardedUnit),
            0, 0, 64, 
            GetPlayersAll(),
            8, 
            105, 155, 205, 205,
            24, 90, 
            3, 4
          )
          */
        });

        DestroyGroup(rewardedGroup);
      }

    });

  }

  // probs refactor these 2
  getNearbyXPHeroes(
    heroGroup: group, 
    position: Vector2D, 
    aoe: number,
    enemiedPlayer: player,
  ) {
    GroupEnumUnitsInRange(
      heroGroup, 
      position.x, 
      position.y, 
      aoe,
      Condition(() => {
        const testUnit = GetFilterUnit();
        return (
          IsUnitType(testUnit, UNIT_TYPE_HERO) &&
          IsUnitEnemy(testUnit, enemiedPlayer) &&
          !IsUnitOwnedByPlayer(testUnit, Player(PLAYER_NEUTRAL_PASSIVE)) && 
          !IsUnitType(testUnit, UNIT_TYPE_DEAD) &&
          !IsUnitType(testUnit, UNIT_TYPE_SUMMONED)
        )
      })
    );
  }

  getNearbyAlliedXPHeroes(
    heroGroup: group, 
    position: Vector2D, 
    aoe: number,
    allyPlayer: player,
  ) {
    GroupEnumUnitsInRange(
      heroGroup, 
      position.x, 
      position.y, 
      aoe,
      Condition(() => {
        const testUnit = GetFilterUnit();
        return (
          IsUnitType(testUnit, UNIT_TYPE_HERO) &&
          IsUnitAlly(testUnit, allyPlayer) &&
          !IsUnitOwnedByPlayer(testUnit, Player(PLAYER_NEUTRAL_PASSIVE)) && 
          !IsUnitType(testUnit, UNIT_TYPE_DEAD) &&
          !IsUnitType(testUnit, UNIT_TYPE_SUMMONED)
        )
      })
    );
  }
}