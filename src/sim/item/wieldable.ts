import {Stats} from '../unit/unit';
import {Integer} from '../math/integer';

export type Wieldable = Weapon | Shield | undefined;

export abstract class Weapon {
  readonly power: Integer;
  readonly evadePercent: Integer;
  // abstract readonly special: ???
  abstract readonly dualWield: boolean;
  abstract readonly doubleHand: boolean;
  abstract readonly throwable: boolean;
  abstract readonly hRange: Integer;
  abstract readonly vRangeUp: Integer;
  abstract readonly vRangeDown: Integer;
  abstract readonly damage: (stats: Stats) => Integer;

  constructor(power: number, evadePercent: number) {
    this.power = Integer.from(power);
    this.evadePercent = Integer.from(evadePercent);
  }
}

export class Fists extends Weapon {
  dualWield = true;
  doubleHand = false;
  throwable = false;
  hRange = Integer.from(1);
  vRangeUp = Integer.from(2);
  vRangeDown = Integer.from(3);
  damage = (stats: Stats) => 
    stats.pAttack
      .times(stats.brave)
      .dividedBy(Integer.from(100))
      .times(stats.pAttack);
}

// export class Knife extends Weapon {

// }

// export class NinjaBlade extends Weapon {

// }

export class Sword extends Weapon {
  dualWield = true;
  doubleHand = true;
  throwable = true;
  hRange = Integer.from(1);
  vRangeUp = Integer.from(2);
  vRangeDown = Integer.from(3);
  damage = (stats: Stats) => 
    stats.pAttack
      .times(this.power);
}

// export class KnightSword extends Weapon {

// }

// export class Katana extends Weapon {

// }

// export class Axe extends Weapon {

// }

// export class Rod extends Weapon {

// }

// export class Staff extends Weapon {

// }

// export class Flail extends Weapon {

// }

// export class Gun extends Weapon {

// }

// export class MagickGun extends Weapon {
  
// }

// export class Crossbow extends Weapon {

// }

// export class Bow extends Weapon {

// }

// export class Instrument extends Weapon {

// }

// export class Book extends Weapon {

// }

// export class Polearm extends Weapon {

// }

// export class Pole extends Weapon {

// }

// export class Bag extends Weapon {

// }

// export class Cloth extends Weapon {

// }

// export class FellSword extends Weapon {

// }

export class Shield {
  readonly pEvadePercent: Integer;
  readonly mEvadePercent: Integer;
  // readonly special: ??
  constructor(pEvadePercent: number, mEvadePercent: number) {
    this.pEvadePercent = Integer.from(pEvadePercent);
    this.mEvadePercent = Integer.from(mEvadePercent);
  }
}

export function isWeapon(item: Wieldable): boolean {
  return item ? (item as Weapon).power !== undefined : false;
}

export const FISTS: Fists = new Fists(0, 0);