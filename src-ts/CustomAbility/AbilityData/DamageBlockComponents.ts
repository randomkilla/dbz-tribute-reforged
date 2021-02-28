export const DamageBlockComponents = [
  // note: group 0 sfx are shown while dmg can still be blocked
  // group 1 sfx are shown the moment no more dmg can be blocked
  // copy from here
  {
    name: "block basic guard",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 3,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // to here, and replace with unique name
  // ----------------------------------------
  {
    name: "block ultra instinct",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 10,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageDeathCaster.mdl",
        repeatInterval: 6,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 155,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block mastered ultra instinct",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 15,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageDeathCaster.mdl",
        repeatInterval: 6,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 155,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block super saiyan rage",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 25,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 3,
    sfxList: [
      {
        model: "IceNova.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
    ],
  },
  // ----------------------------------------
  {
    name: "block future sight",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 75,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 2,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageDeathCaster.mdl",
        repeatInterval: 6,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 155,
          y: 155,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block angry shout",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 40,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.2,
    sfxList: [
      {
        model: "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block broly",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 12,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.12,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\AntiMagicShell\\AntiMagicShell.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "overhead",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block kyodaika",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 40,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 2.0,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\AntiMagicShell\\AntiMagicShell.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "overhead",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block heros flute",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 70,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.45,
    sfxList: [
      {
        model: "IceNova.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 255,
          z: 155,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block absorb",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.5,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\AntiMagicShell\\AntiMagicShell.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "overhead",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block cell-x",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 7.0,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\Web\\WebTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block nova chariot",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 0.5,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Items\\OrbCorruption\\OrbCorruptionSpecialArt.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block geti star repair",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 200,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.6,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Orc\\ReinforcedTrollBurrow\\ReinforcedTrollBurrowTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block android barrier",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.6,
    sfxList: [
      // {
      //   model: "IceNova.mdl",
      //   repeatInterval: 1,
      //   group: 1,
      //   scale: 1.5,
      //   startHeight: 25,
      //   endHeight: 25,
      //   extraDirectionalYaw: 0,
      //   color: {
      //     x: 255,
      //     y: 255,
      //     z: 255,
      //   },
      //   persistent: false,
      //   attachmentPoint: "",
      // },
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\AntiMagicShell\\AntiMagicShell.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 6.0,
        startHeight: 100,
        endHeight: 100,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block babidi barrier",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.8,
    sfxList: [
      {
        model: "Abilities\\Spells\\Demon\\DemonBoltImpact\\DemonBoltImpact.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 105,
          y: 255,
          z: 155,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block belly armor",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 2.0,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\AntiMagicShell\\AntiMagicShell.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block energy absorption",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 200,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 2,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Undead\\Cripple\\CrippleTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block absolute zero",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 65,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.65,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Naga\\NagaDeath\\NagaDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.25,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 0.75,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block jiren meditate",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 6.0,
    sfxList: [
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      // {
      //   model: "JirenShield.mdl",
      //   repeatInterval: 0,
      //   group: 0,
      //   scale: 3.0,
      //   startHeight: 0,
      //   endHeight: 0,
      //   extraDirectionalYaw: 0,
      //   extraPitch: 0,
      //   color: {
      //     x: 255,
      //     y: 255,
      //     z: 255,
      //   },
      //   updateCoordsOnly: false,
      //   persistent: true,
      //   attachmentPoint: "origin",
      // },
    ],
  },
  // ----------------------------------------
  {
    name: "block jiren meditate 2",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 100,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 8.0,
    sfxList: [
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 3.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      // {
      //   model: "JirenShield.mdl",
      //   repeatInterval: 0,
      //   group: 0,
      //   scale: 3.0,
      //   startHeight: 0,
      //   endHeight: 0,
      //   extraDirectionalYaw: 0,
      //   extraPitch: 0,
      //   color: {
      //     x: 255,
      //     y: 255,
      //     z: 255,
      //   },
      //   updateCoordsOnly: false,
      //   persistent: true,
      //   attachmentPoint: "origin",
      // },
    ],
  },
  // ----------------------------------------
  {
    name: "block ultimate burning warrior",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 15,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 3,
    sfxList: [
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
    ],
  },
  // ----------------------------------------
  {
    name: "block ultimate burning warrior 2",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 20,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 4,
    sfxList: [
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 3.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
    ],
  },
  // ----------------------------------------
  {
    name: "block god of destruction toppo",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 20,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 7.5,
    sfxList: [
      {
        model: "PurpleSlam.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.25,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block roshi max power",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 10,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 3,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.0,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
    ],
  },
  // ----------------------------------------
  {
    name: "block one for all",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 10,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 2,
    sfxList: [
      {
        model: "Slam.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 2.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
    ],
  },
  // ----------------------------------------
  {
    name: "block parry sephiroth",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 75,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 0.3,
    sfxList: [
      {
        model: "PurpleSlam.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 85,
          z: 195,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block tien kiai",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 40,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.2,
    sfxList: [
      {
        model: "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block bankai blut vene",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 75,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 10,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block blut vene",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 90,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 10,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block blazing dynamo",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 15,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    // pretty much 100% dmg block
    multiplier: 5.0,
    sfxList: [
      {
        model: "Firaga.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Weapons\\FireBallMissile\\FireBallMissile.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 2.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block paragon of flame",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 25,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 0.5,
    sfxList: [
      {
        model: "Firaga.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "JirenShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 3.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block tyranno roar",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 40,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.3,
    sfxList: [
      {
        model: "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "WhisShield.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // ----------------------------------------
  {
    name: "block geti star fragment item",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 200,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 2.5,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Orc\\ReinforcedTrollBurrow\\ReinforcedTrollBurrowTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        extraPitch: 0,
        animSpeed: 1.0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        updateCoordsOnly: false,
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
];