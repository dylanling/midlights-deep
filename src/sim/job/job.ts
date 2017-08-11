import {Equipment} from '../item/equipment';
import {Ability, ActionAbility, ReactionAbility, SupportAbility, MovementAbility} from '../ability/ability';
import {Integer} from '../math/integer';

export class Job {
  readonly abilitySet: AbilitySet;
  //type: JobType;

  readonly hpMultiplier: Integer;
  readonly mpMultiplier: Integer;
  readonly speedMultiplier: Integer;
  readonly pAttackMultiplier: Integer;
  readonly mAttackMultiplier: Integer;

  readonly move: Integer;
  readonly jump: Integer;
  readonly pEvadePercent: Integer;

  readonly canEquip: (item: Equipment) => boolean;
  //immunities: Array<Status>;
  // TODO: equippable stuffs

  // TODO: sprite

  constructor(abilitySet: AbilitySet,
              hpMultiplier: number,
              mpMultiplier: number,
              speedMultiplier: number,
              pAttackMultiplier: number,
              mAttackMultiplier: number,
              move: number,
              jump: number,
              pEvadePercent: number,
              canEquip: (item: Equipment) => boolean) {
    this.abilitySet = abilitySet;
    this.hpMultiplier = Integer.from(hpMultiplier);
    this.mpMultiplier = Integer.from(mpMultiplier);
    this.speedMultiplier = Integer.from(speedMultiplier);
    this.pAttackMultiplier = Integer.from(pAttackMultiplier);
    this.mAttackMultiplier = Integer.from(mAttackMultiplier);
    this.move = Integer.from(move);
    this.jump = Integer.from(jump);
    this.pEvadePercent = Integer.from(pEvadePercent);
    this.canEquip = canEquip;
  }
}

export class AbilitySet {
  readonly actionAbilities: Array<ActionAbility>;
  readonly reactionAbilities: Array<ReactionAbility>;
  readonly supportAbilities: Array<SupportAbility>;
  readonly movementAbilities: Array<MovementAbility>;

  constructor(actionAbilities: Array<ActionAbility>,
              reactionAbilities: Array<ReactionAbility>,
              supportAbilities: Array<SupportAbility>,
              movementAbilities: Array<MovementAbility>) {
    this.actionAbilities = actionAbilities;
    this.reactionAbilities = reactionAbilities;
    this.supportAbilities = supportAbilities;
    this.movementAbilities = movementAbilities;
  }

  get abilities(): Array<Ability> {
    return this.actionAbilities
      .concat(this.reactionAbilities)
      .concat(this.supportAbilities)
      .concat(this.movementAbilities);
  }
}

export enum JobType {
  SPECIAL,
  GENERIC,
  MONSTER,
  DEMON,
  LUCAVI
}