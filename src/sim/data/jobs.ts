import {Job, JobType} from '../job/job';
import {AbilitySet} from '../ability/ability';
import {Status} from '../battle/status';
import * as AbilitySets from './abilitysets';
import {Integer} from '../math/integer';

class Knight implements Job {
  name = (): string => 'Knight';
  abilitySet = (): AbilitySet => new AbilitySets.ArtsOfWar();
  type = (): JobType => JobType.GENERIC;

  hpMultiplier = (): Integer => Integer.from(120);
  mpMultiplier = (): Integer => Integer.from(80);
  speedMultiplier = (): Integer => Integer.from(100);
  pAttackMultiplier = (): Integer => Integer.from(120);
  mAttackMultiplier = (): Integer => Integer.from(80);

  hpLevelUpIncrement = (): Integer => Integer.from(10);
  mpLevelUpIncrement = (): Integer => Integer.from(15);
  speedLevelUpIncrement = (): Integer => Integer.from(100);
  pAttackLevelUpIncrement = (): Integer => Integer.from(40);
  mAttackLevelUpIncrement = (): Integer => Integer.from(50);

  move = (): Integer => Integer.from(3);
  jump = (): Integer => Integer.from(3);
  pEvadePercent = (): Integer => Integer.from(10);

  immunities = (): Array<Status> => [];
  jobRequirements = (): Map<Job, Integer> => new Map();
}

const GENERIC_JOBS = [new Knight()];