import {Job} from '../job/job';
import {Integer} from '../math/integer';

export interface Unit {
  name(): string;
  zodiac(): Zodiac;
  gender(): Gender;

  level(): Integer;
  brave(): Integer;
  faith(): Integer;
  maxHp(): Integer;
  maxMp(): Integer;
  pAttack(): Integer;
  mAttack(): Integer;

  activeJob(): Job;
  allowableJobs(): Array<Job>;
  jobPoints(): Map<Job, Integer>;
  availableJobs(): Array<Job>;
}

export enum Zodiac {
  ARIES,
  TAURUS,
  GEMINI,
  CANCER,
  LEO,
  VIRGO,
  LIBRA,
  SCORPIO,
  SAGITTARIUS,
  CAPRICORN,
  AQUARIUS,
  PISCES,
  SERPENTARIUS
}

export enum Gender {
  MALE,
  FEMALE,
  MONSTER
}
