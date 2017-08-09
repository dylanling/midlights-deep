import {Stats} from '../unit/unit';
import {Integer} from '../math/integer';

// export type Weapon = Knife
//   | NinjaBlade
//   | Sword
//   | KnightSword
//   | Katana
//   | Axe
//   | Rod
//   | Staff
//   | Flail
//   | Gun
//   | MagickGun
//   | Crossbow
//   | Bow
//   | Instrument
//   | Book
//   | Polearm
//   | Pole
//   | Bag
//   | Cloth
//   | FellSword;

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

  constructor(power: Integer, evadePercent: Integer) {
    this.power = power;
    this.evadePercent = evadePercent;
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