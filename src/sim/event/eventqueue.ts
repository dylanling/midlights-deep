import {Event} from './event';
import {GameState} from '../battle/gamestate';

// TODO: replace uses with some queue library
export class EventQueue {
  readonly events: Array<Event>;
  readonly initial: GameState;

  constructor(initial: GameState, events?: Array<Event>) {
    this.initial = initial;
    this.events = events ? events : [];
  }

  push(event: Event): void {
    this.events.push(event);
  }

  process(): GameState {
    // TODO: make functional
    let state = this.initial;
    this.events.forEach(event => {
      state = event.process(state);
    });
    return state;
  }
}