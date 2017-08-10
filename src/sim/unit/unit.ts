import {Job} from '../job/job';
import {Wieldable, Weapon, FISTS, isWeapon} from '../item/wieldable';
import {Headgear} from '../item/headgear';
import {BodyArmor} from '../item/bodyarmor';
import {Accessory} from '../item/accessory';
import * as Abilities from '../ability/ability';
import {Integer} from '../math/integer';

export class Unit {
  readonly name: string;
  readonly zodiac: Zodiac;
  readonly gender: Gender;
  readonly stats: Stats;
  readonly job: Job;
  readonly abilities: UnitAbilities;
  readonly equipment: UnitEquipment;

  constructor(name: string,
              zodiac: Zodiac,
              gender: Gender,
              stats: Stats,
              job: Job,
              abilities: UnitAbilities,
              equipment: UnitEquipment) {
    this.name = name;
    this.zodiac = zodiac;
    this.gender = gender;
    this.stats = stats;
    this.job = job;
    this.abilities = abilities;
    this.equipment = equipment;
  }

  withName (name: string): Unit {
    return new Unit(name, this.zodiac, this.gender, this.stats, this.job, this.abilities, this.equipment);
  }
  withZodiac(zodiac: Zodiac): Unit {
    return new Unit(this.name, zodiac, this.gender, this.stats, this.job, this.abilities, this.equipment);
  }
  withGender(gender: Gender): Unit {
    return new Unit(this.name, this.zodiac, gender, this.stats, this.job, this.abilities, this.equipment);
  }
  withStats(stats: Stats): Unit {
    return new Unit(this.name, this.zodiac, this.gender, stats, this.job, this.abilities, this.equipment);
  }
  withJob(job: Job): Unit {
    return new Unit(this.name, this.zodiac, this.gender, this.stats, job, this.abilities, this.equipment);
  }
  withAbilities(abilities: UnitAbilities): Unit {
    return new Unit(this.name, this.zodiac, this.gender, this.stats, this.job, abilities, this.equipment);
  }
  withEquipment(equipment: UnitEquipment): Unit {
    return new Unit(this.name, this.zodiac, this.gender, this.stats, this.job, this.abilities, equipment);
  }
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

export class UnitEquipment {
  readonly rightHand?: Wieldable;
  readonly leftHand?: Wieldable;
  readonly headgear?: Headgear;
  readonly armor?: BodyArmor;
  readonly accessory?: Accessory;

  constructor(rightHand?: Wieldable,
              leftHand?: Wieldable,
              headgear?: Headgear,
              armor?: BodyArmor,
              accessory?: Accessory) {
    this.rightHand = rightHand;
    this.leftHand = leftHand;
    this.headgear = headgear;
    this.armor = armor;
    this.accessory = accessory;
  }

  get weapon(): Weapon {
    return isWeapon(this.rightHand)
      ? <Weapon>this.rightHand
      : isWeapon(this.leftHand)
        ? <Weapon>this.leftHand
        : FISTS;
  }
}

export class UnitAbilities {
  readonly job: Job;
  readonly secondarySet?: Abilities.AbilitySet;
  readonly reaction?: Abilities.ReactionAbility;
  readonly support?: Abilities.SupportAbility;
  readonly movement?: Abilities.MovementAbility;

  constructor(job: Job, 
              actions?: Abilities.AbilitySet, 
              reaction?: Abilities.ReactionAbility, 
              support?: Abilities.SupportAbility, 
              movement?: Abilities.MovementAbility) {
    this.job = job;
    this.secondarySet = actions;
    this.reaction = reaction;
    this.support = support;
    this.movement = movement;
  }

  get primarySet(): Abilities.AbilitySet {
    return this.job.abilitySet;
  }

  get actions(): Array<Abilities.ActionAbility> {
    return this.primarySet.actionAbilities
      .concat(this.secondarySet.actionAbilities);
  }

  withJob(job: Job): UnitAbilities {
    return new UnitAbilities(job, this.secondarySet, this.reaction, this.support, this.movement);
  }
  withActions(secondarySet: Abilities.AbilitySet): UnitAbilities {
    return new UnitAbilities(this.job, secondarySet, this.reaction, this.support, this.movement);
  }
  withReaction(reaction: Abilities.ReactionAbility): UnitAbilities {
    return new UnitAbilities(this.job, this.secondarySet, reaction, this.support, this.movement);
  }
  withSupport(support: Abilities.SupportAbility): UnitAbilities {
    return new UnitAbilities(this.job, this.secondarySet, this.reaction, support, this.movement);
  }
  withMovement(movement: Abilities.MovementAbility): UnitAbilities {
    return new UnitAbilities(this.job, this.secondarySet, this.reaction, this.support, movement);
  }
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
