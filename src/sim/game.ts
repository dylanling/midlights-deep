import {GameState} from './battle/gamestate';
import {BattleEvent} from './battle/event';
import {EventQueue} from './battle/eventqueue';

export class Game {
  // display gamestate
    // map with tiles
    // mapping of tiles and units
  // event queue
  readonly initial: GameState;
  readonly events: EventQueue;
  private _current: GameState;

  constructor(initial: GameState) {
    this.initial = initial;
    this._current = initial;
    this.events = new EventQueue(initial);
  }

  get current(): GameState {
    return this._current;
  }

  // TODO: store history
  update(event: BattleEvent): void {
    this.events.push(event);
    this._current = this.events.process();
  }

  // TODO: process from snapshot
  // TODO: differentiate update by adding new event
  // or maybe every 10 events destroy history
}