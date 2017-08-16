import {Job, AbilitySet} from '../job/job';
import {AbilitySet} from '../ability/ability';
import {Equipment} from '../item/equipment';
import * as Wieldable from '../item/wieldable';
import * as Headgear from '../item/headgear';
import * as BodyArmor from '../item/bodyarmor';
import * as Accessory from '../item/accessory';
import {Integer} from '../math/integer';


// constructor(abilitySet: AbilitySet,
//   hpMultiplier: number,
//   mpMultiplier: number,
//   speedMultiplier: number,
//   pAttackMultiplier: number,
//   mAttackMultiplier: number,
//   move: number,
//   jump: number,
//   pEvadePercent: number,
//   canEquip: (item: Equipment) => boolean) {

//   constructor(actionAbilities: Array<ActionAbility>,
//     reactionAbilities: Array<ReactionAbility>,
//     supportAbilities: Array<SupportAbility>,
//     movementAbilities: Array<MovementAbility>) {
// this.actionAbilities = actionAbilities;
// this.reactionAbilities = reactionAbilities;
// this.supportAbilities = supportAbilities;
// this.movementAbilities = movementAbilities;

const ARTS_OF_WAR = new AbilitySet(
  [], [], [], []
);

const canKnightEquip = (item: Equipment) =>
  item instanceof Wieldable.Sword ||
    // item instanceof Wieldable.KnightSword ||
    item instanceof Wieldable.Shield ||
    item instanceof Headgear.Helm ||
    item instanceof BodyArmor.Armor ||
    item instanceof BodyArmor.Robe ||
    item instanceof Accessory.Cloak ||
    item instanceof Accessory.EffectAccessory;

export const KNIGHT = new Job(
  ARTS_OF_WAR, 120, 80, 100, 120, 80, 3, 3, 10, canKnightEquip
);