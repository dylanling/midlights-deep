import {EventProcessor, MovementEventProcessor} from './eventprocessor';
import {Unit} from '../unit/unit';
import {Integer} from '../math/integer';

export interface BattleEvent {
  processor(): EventProcessor<BattleEvent>;
}

export class MovementEvent implements BattleEvent {
  static readonly processor: EventProcessor<MovementEvent> = new MovementEventProcessor();
  // readonly unit: Unit;
  readonly oldLocation: [Integer, Integer];
  readonly newLocation: [Integer, Integer];

  constructor(oldLocation: [Integer, Integer], newLocation: [Integer, Integer]) {
    this.oldLocation = oldLocation;
    this.newLocation = newLocation;
  }

  processor() {
    return MovementEvent.processor;
  }
}

// export class AttackEvent implements BattleEvent {
//   readonly attacker: Unit;
//   readonly target: Unit;

//   constructor(attacker: Unit, target: Unit) {
//     this.attacker = attacker;
//     this.target = target;
//   }
// }