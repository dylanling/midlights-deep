export interface Ability {
  name(): string;
  description(): string;
}

export abstract class ActionAbility implements Ability {
  abstract name(): string;
  abstract description(): string;
  // range?
  // success calculation?
}

export abstract class ReactionAbility implements Ability {
  abstract name(): string;
  abstract description(): string;
  // success calculation?
}

export abstract class SupportAbility implements Ability {
  abstract name(): string;
  abstract description(): string;
}

export abstract class MovementAbility implements Ability {
  abstract name(): string;
  abstract description(): string;
  // modified range?
}

export abstract class AbilitySet {
  abstract actionAbilities(): Array<ActionAbility>;
  abstract reactionAbilities(): Array<ReactionAbility>;
  abstract supportAbilities(): Array<SupportAbility>;
  abstract movementAbilities(): Array<MovementAbility>;

  abilities = (): Array<Ability> =>
    this.actionAbilities()
      .concat(this.reactionAbilities())
      .concat(this.supportAbilities())
      .concat(this.movementAbilities());
}