import {Unit} from '../unit/unit';
import {GameState} from '../battle/gamestate';

export interface Event {
  valid(state: GameState): boolean;
  process(state: GameState): GameState;
}

export class MovementEvent implements Event {
  readonly unit: Unit;
  valid(state: GameState) {
    return true;
  }

  process(state: GameState): GameState {
    return state;
  }
}

export class AttackEvent implements Event {
  readonly attacker: Unit;
  readonly target: Unit;

  constructor(attacker: Unit, target: Unit) {
    this.attacker = attacker;
    this.target = target;
  }
  
  valid(state: GameState) {
    return true;
  }

  process(state: GameState): GameState {
    return state;
  }
}