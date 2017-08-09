import {Integer} from '../math/integer';

export type Accessory = EffectAccessory | Cloak;

export abstract class EffectAccessory {
  //readonly effect: ???
}

export class Shoe extends EffectAccessory {

}

export class Gauntlet extends EffectAccessory {
  
}

export class Ring extends EffectAccessory {
  
}

export class Armlet extends EffectAccessory {
  
}

export class Perfume extends EffectAccessory {
  
}

export class LipRouge extends EffectAccessory {
  
}

export class Cloak {
  readonly pEvadePercent: Integer;
  readonly mEvadePercent: Integer;
  // readonly special: ??
  constructor(pEvadePercent: number, mEvadePercent: number) {
    this.pEvadePercent = Integer.from(pEvadePercent);
    this.mEvadePercent = Integer.from(mEvadePercent);
  }
}