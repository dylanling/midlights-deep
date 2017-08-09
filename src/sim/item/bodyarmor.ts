import {Integer} from '../math/integer';


export abstract class BodyArmor {
  readonly hp: Integer;
  readonly mp: Integer;
  // readonly special
  constructor(hp: number, mp: number) {
    this.hp = Integer.from(hp);
    this.mp = Integer.from(mp);
  } 
}

export class Armor extends BodyArmor {

}

export class Clothing extends BodyArmor {
  
}

export class Robe extends BodyArmor {
  
}