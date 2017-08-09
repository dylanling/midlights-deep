import {Integer} from '../math/integer';

export abstract class Headgear {
  readonly hp: Integer;
  readonly mp: Integer;
  // readonly special
  constructor(hp: number, mp: number) {
    this.hp = Integer.from(hp);
    this.mp = Integer.from(mp);
  } 
}

export class Helm extends Headgear {

}

export class Hat extends Headgear {

}

export class HairAdornment extends Headgear {

}