import {Integer} from '../math/integer';

export class Shield {
  readonly pEvadePercent: Integer;
  readonly mEvadePercent: Integer;
  // readonly special: ??
  constructor(pEvadePercent: Integer, mEvadePercent: Integer) {
    this.pEvadePercent = pEvadePercent;
    this.mEvadePercent = mEvadePercent;
  }
}