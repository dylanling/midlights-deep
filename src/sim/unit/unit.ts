import {Job} from '../job/job';
import {ActionAbility, ReactionAbility, SupportAbility, MovementAbility, AbilitySet} from '../ability/ability';
import {Integer} from '../math/integer';

export class Unit {
  readonly name: string;
  readonly zodiac: Zodiac;
  readonly gender: Gender;
  readonly stats: Stats;
  readonly job: Job;
  readonly abilities: Abilities;
  readonly equipment: Equipment;

  constructor(name: string,
              zodiac: Zodiac,
              gender: Gender,
              stats: Stats,
              job: Job,
              abilities: Abilities,
              equipment: Equipment) {
    this.name = name;
    this.zodiac = zodiac;
    this.gender = gender;
    this.stats = stats;
    this.job = job;
    this.abilities = abilities;
    this.equipment = equipment;
  }
  withName = (name: string): Unit =>
    new Unit(name, this.zodiac, this.gender, this.stats, this.job, this.abilities, this.equipment);
  withZodiac = (zodiac: Zodiac): Unit =>
    new Unit(this.name, zodiac, this.gender, this.stats, this.job, this.abilities, this.equipment);
  withGender = (gender: Gender): Unit =>
    new Unit(this.name, this.zodiac, gender, this.stats, this.job, this.abilities, this.equipment);
  withStats = (stats: Stats): Unit =>
    new Unit(this.name, this.zodiac, this.gender, stats, this.job, this.abilities, this.equipment);
  withJob = (job: Job): Unit =>
    new Unit(this.name, this.zodiac, this.gender, this.stats, job, this.abilities, this.equipment);
  withAbilities = (abilities: Abilities): Unit =>
    new Unit(this.name, this.zodiac, this.gender, this.stats, this.job, abilities, this.equipment);
  withEquipment = (equipment: Equipment): Unit =>
    new Unit(this.name, this.zodiac, this.gender, this.stats, this.job, this.abilities, equipment);
}

export class Stats {
  readonly level: Integer;
  readonly brave: Integer;
  readonly faith: Integer;
  readonly speed: Integer;
  readonly move: Integer;
  readonly jump: Integer;
  readonly maxHp: Integer;
  readonly maxMp: Integer;
  readonly currentHp: Integer;
  readonly currentMp: Integer;
  readonly pAttack: Integer;
  readonly mAttack: Integer;

  // TODO: constructor
}

export class Equipment {
  
}

export class Abilities {
  readonly job: Job;
  readonly secondarySet?: AbilitySet;
  readonly reaction?: ReactionAbility;
  readonly support?: SupportAbility;
  readonly movement?: MovementAbility;

  constructor(job: Job, 
              actions: AbilitySet, 
              reaction: ReactionAbility, 
              support: SupportAbility, 
              movement: MovementAbility) {
    this.job = job;
    this.secondarySet = actions;
    this.reaction = reaction;
    this.support = support;
    this.movement = movement;
  }

  get primarySet(): AbilitySet {
    return this.job.abilitySet;
  }

  get actions(): Array<ActionAbility> {
    return this.primarySet.actionAbilities
      .concat(this.secondarySet.actionAbilities);
  }

  withJob = (job: Job): Abilities =>
    new Abilities(job, this.secondarySet, this.reaction, this.support, this.movement);
  withActions = (secondarySet: AbilitySet): Abilities =>
    new Abilities(this.job, secondarySet, this.reaction, this.support, this.movement);
  withReaction = (reaction: ReactionAbility): Abilities =>
    new Abilities(this.job, this.secondarySet, reaction, this.support, this.movement);
  withSupport = (support: SupportAbility): Abilities =>
    new Abilities(this.job, this.secondarySet, this.reaction, support, this.movement);
  withMovement = (movement: MovementAbility): Abilities =>
    new Abilities(this.job, this.secondarySet, this.reaction, this.support, movement);
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
