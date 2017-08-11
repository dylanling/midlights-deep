import {Job, AbilitySet} from '../job/job';
import {AbilitySet} from '../ability/ability';
import {Equipment} from '../item/equipment';
import * as Wieldable from '../item/wieldable';
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
  true;

export const KNIGHT = new Job(
  ARTS_OF_WAR, 120, 80, 100, 120, 80, 3, 3, 10, canKnightEquip
);