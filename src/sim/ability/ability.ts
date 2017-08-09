export type Ability = ActionAbility 
  | ReactionAbility
  | SupportAbility
  | MovementAbility;

export interface ActionAbility {

}

export interface ReactionAbility {

}

export interface SupportAbility {

}

export interface MovementAbility {

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