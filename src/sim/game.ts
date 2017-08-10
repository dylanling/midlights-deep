import {GameState} from './battle/gamestate';
import {Event} from './event/event';
import {EventQueue} from './event/eventqueue';

class Game {
  // display gamestate
    // map with tiles
    // mapping of tiles and units
  // event queue
  readonly initial: GameState;
  readonly events: EventQueue;

  private _current: GameState;

  get current(): GameState {
    return this._current;
  }

  // TODO: store history
  update(event: Event): GameState {
    this.events.push(event);
    return this.events.process();
  }

  // TODO: process from snapshot
  // TODO: differentiate update by adding new event
  // or maybe every 10 events destroy history
}