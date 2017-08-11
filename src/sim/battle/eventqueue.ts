import {BattleEvent} from './event';
import {GameState} from '../battle/gamestate';

// TODO: replace uses with some queue library
export class EventQueue {
  readonly events: Array<BattleEvent>;
  readonly initial: GameState;

  constructor(initial: GameState, events?: Array<BattleEvent>) {
    this.initial = initial;
    this.events = events ? events : [];
  }

  push(event: BattleEvent): void {
    this.events.push(event);
  }

  process(): GameState {
    // TODO: make functional
    let state = this.initial;
    this.events.forEach(event => {
      state = event.processor().validate(event, state)
        ? event.processor().process(event, state)
        : state;
    });
    return state;
  }
}