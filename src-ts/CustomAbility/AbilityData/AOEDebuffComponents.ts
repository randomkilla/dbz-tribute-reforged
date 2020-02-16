export module Debuffs {
  export const THUNDERBOLT_ORDER_ID = 852095;
  export const STUN_MICRO = FourCC('A08K')
  export const STUN_TWO_SECOND = FourCC('A0I7');
  export const STUN_ONE_SECOND = FourCC('A0IY');

  export const CURSE_ORDER_ID = 852190;
  export const DEMONS_MARK = FourCC("A0O7");
}

export const AOEDebuffComponents = [
  {
    name: "stun masenko",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
  },
  {
    name: "stun blazing rush",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
  },
  {
    name: "stun super saiyan rage",
    repeatInterval: 33,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_MICRO,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 200,
    keepCasting: true, 
  },
  {
    name: "stun saiyan spirit",
    repeatInterval: 1,
    startTick: 3,
    endTick: 22,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
  },
  {
    name: "stun reliable friend",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
  },
  {
    name: "stun energy punch",
    repeatInterval: 1,
    startTick: 17,
    endTick: 23,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
  },
  {
    name: "stun behind you",
    repeatInterval: 1,
    startTick: 5,
    endTick: 15,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
  },
  {
    name: "debuff demons mark rakshasa claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
  },
  {
    name: "debuff demons mark devil claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
  },
]