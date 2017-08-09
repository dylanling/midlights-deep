import {Unit, Zodiac, Gender} from './unit';
import {Job} from '../job/job';
import {Integer} from '../math/integer';

export abstract class BaseUnit implements Unit {
  protected _name: string;
  protected _zodiac: Zodiac;
  protected _gender: Gender;
  protected _level: Integer;
  protected _brave: Integer;
  protected _faith: Integer;
  protected _maxHp: Integer;
  protected _maxMp: Integer;
  protected _pAttack: Integer;
  protected _mAttack: Integer;
  protected _activeJob: Job;
  protected _allowableJobs: Array<Job>;
  protected _jobPoints: Map<Job, Integer>;

  constructor(name: string,
              zodiac: Zodiac,
              gender: Gender,
              level: Integer,
              brave: Integer,
              faith: Integer,
              maxHp: Integer,
              maxMp: Integer,
              pAttack: Integer,
              mAttack: Integer,
              activeJob: Job,
              allowableJobs: Array<Job>,
              jobPoints: Map<Job, Integer>) {
    this._name = name;
    this._zodiac = zodiac;
    this._gender = gender;
    this._level = level;
    this._brave = brave;
    this._faith = faith;
    this._maxHp = maxHp;
    this._maxMp = maxMp;
    this._pAttack = pAttack;
    this._mAttack = mAttack;
    this._activeJob = activeJob;
    this._allowableJobs = allowableJobs;
    this._jobPoints = jobPoints;
  }

  abstract builderFrom<T extends BaseUnit>(unit: T): Builder<T>;

  name = (): string => this._name;
  zodiac = (): Zodiac => this._zodiac;
  gender = (): Gender => this._gender;
  level = (): Integer => this._level;
  brave = (): Integer => this._brave;
  faith = (): Integer => this._faith;
  maxHp = (): Integer => this._maxHp;
  maxMp = (): Integer => this._maxMp;
  pAttack = (): Integer => this._pAttack;
  mAttack = (): Integer => this._mAttack;

  activeJob = (): Job => this._activeJob;
  allowableJobs = (): Array<Job> => this._allowableJobs;
  jobPoints = (): Map<Job, Integer> => this._jobPoints;

  jobRequirementsMet = (candidateJob: Job): boolean =>
    Array.from(candidateJob.jobRequirements().entries()).length === 0
      ? true
      : Array.from(candidateJob.jobRequirements().entries())
          .map(([job, points]) => 
            this.jobPoints().get(job).greaterThanOrEqualTo(points) 
              && this.jobRequirementsMet(job))
          .every(met => met);
  
  availableJobs = (): Array<Job> =>
    Array.from(this.jobPoints().keys())
      .filter(job => this.jobRequirementsMet(job));    
}

export class Builder<T extends BaseUnit> {
  private _name: string;
  private _zodiac: Zodiac;
  private _gender: Gender;
  private _level: Integer;
  private _brave: Integer;
  private _faith: Integer;
  private _maxHp: Integer;
  private _maxMp: Integer;
  private _pAttack: Integer;
  private _mAttack: Integer;
  private _activeJob: Job;
  private _allowableJobs: Array<Job>;
  private _jobPoints: Map<Job, Integer>;

  name(name: string): Builder<T> {
    this._name = name;
    return this;
  }

  zodiac(zodiac: Zodiac): Builder<T> {
    this._zodiac = zodiac;
    return this;
  }

  gender(gender: Gender): Builder<T> {
    this._gender = gender;
    return this;
  }

  level(level: Integer): Builder<T> {
    this._level = level;
    return this;
  }

  brave(brave: Integer): Builder<T> {
    this._brave = brave;
    return this;
  }

  faith(faith: Integer): Builder<T> {
    this._faith = faith;
    return this;
  }

  maxHp(maxHp: Integer): Builder<T> {
    this._maxHp = maxHp;
    return this;
  }

  maxMp(maxMp: Integer): Builder<T> {
    this._maxMp = maxMp;
    return this;
  }

  pAttack(pAttack: Integer): Builder<T> {
    this._pAttack = pAttack;
    return this;
  }

  mAttack(mAttack: Integer): Builder<T> {
    this._mAttack = mAttack;
    return this;
  }

  activeJob(activeJob: Job): Builder<T> {
    this._activeJob = activeJob;
    return this;
  }

  allowableJobs(allowableJobs: Array<Job>): Builder<T> {
    this._allowableJobs = allowableJobs;
    return this;
  }

  jobPoints(jobPoints: Map<Job, Integer>): Builder<T> {
    this._jobPoints = jobPoints;
    return this;
  }
}

export class GenericUnit extends BaseUnit {
  builderFrom(unit: GenericUnit): Builder<GenericUnit> {
    return new Builder<GenericUnit>();
  }
}