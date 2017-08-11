import {EventProcessor, MovementEventProcessor} from './eventprocessor';
import {Unit} from '../unit/unit';
import {Integer} from '../math/integer';

// processor constants
const movementProcessor: EventProcessor<MovementEvent> = new MovementEventProcessor();

export interface BattleEvent {
  processor(): EventProcessor<BattleEvent>;
}

export class MovementEvent implements BattleEvent {
  // readonly unit: Unit;
  readonly oldLocation: [Integer, Integer];
  readonly newLocation: [Integer, Integer];

  constructor(oldLocation: [Integer, Integer], newLocation: [Integer, Integer]) {
    this.oldLocation = oldLocation;
    this.newLocation = newLocation;
  }

  processor() {
    return movementProcessor;
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