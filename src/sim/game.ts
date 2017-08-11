import {GameState} from './battle/gamestate';
import {BattleEvent} from './battle/event';
import {EventQueue} from './battle/eventqueue';

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
  update(event: BattleEvent): GameState {
    this.events.push(event);
    return this.events.process();
  }

  // TODO: process from snapshot
  // TODO: differentiate update by adding new event
  // or maybe every 10 events destroy history
}