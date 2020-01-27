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
    attribute: bj_HEROSTAT_STR,
    multiplier: 5,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
        model: "Abilities\\Spells\\Human\\ManaShield\\ManaShieldCaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
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
    multiplier: 20,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
    multiplier: 25,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
  {
    name: "block future sight",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_INT,
    multiplier: 1.2,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\WarStomp\\WarStompCaster.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
  {
    name: "block angry shout",
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
        model: "Abilities\\Spells\\Human\\ManaShield\\ManaShieldCaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
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
    blockPerDamage: 20,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_STR,
    multiplier: 0.2,
    sfxList: [
      {
        model: "Objects\\Spawnmodels\\Undead\\UCancelDeath\\UCancelDeath.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
    name: "block nova chariot",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    blockPerDamage: 50,
    isPercentageBlock: true,
    attribute: bj_HEROSTAT_AGI,
    multiplier: 0.75,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
    multiplier: 0.9,
    sfxList: [
      {
        model: "Abilities\\Spells\\Orc\\FeralSpirit\\feralspiritdone.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
    multiplier: 0.7,
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
    multiplier: 1,
    sfxList: [
      {
        model: "Abilities\\Spells\\Demon\\DemonBoltImpact\\DemonBoltImpact.mdl",
        repeatInterval: 1,
        group: 1,
        scale: 1.5,
        startHeight: 25,
        endHeight: 25,
        extraDirectionalYaw: 0,
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
        model: "Abilities\\Spells\\Human\\ManaShield\\ManaShieldCaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
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