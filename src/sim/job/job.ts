import {AbilitySet} from '../ability/ability';
import {Status} from '../battle/status';
import {Integer} from '../math/integer';

export interface Job {
  name(): string;
  abilitySet(): AbilitySet;
  type(): JobType;

  hpMultiplier(): Integer;
  mpMultiplier(): Integer;
  speedMultiplier(): Integer;
  pAttackMultiplier(): Integer;
  mAttackMultiplier(): Integer;

  hpLevelUpIncrement(): Integer;
  mpLevelUpIncrement(): Integer;
  speedLevelUpIncrement(): Integer;
  pAttackLevelUpIncrement(): Integer;
  mAttackLevelUpIncrement(): Integer;

  move(): Integer;
  jump(): Integer;
  pEvadePercent(): Integer;

  immunities(): Array<Status>;
  jobRequirements(): Map<Job, Integer>;

  // TODO: equippable stuffs

  // TODO: sprite
}

export enum JobType {
  SPECIAL,
  GENERIC,
  MONSTER,
  DEMON,
  LUCAVI
}