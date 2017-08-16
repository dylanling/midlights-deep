import {BattleEvent, MovementEvent} from './event';
import {GameState} from './gamestate';

export interface EventProcessor<T extends BattleEvent> {
  validate(event: T, state: GameState): boolean;
  process(event: T, state: GameState): GameState;
}

export class MovementEventProcessor implements EventProcessor<MovementEvent> {
  validate(event: MovementEvent, state: GameState) {
    let unit = state.units.get(event.oldLocation);
    return unit 
      ? state.distanceBetween(event.oldLocation, event.newLocation)
        .lessThanOrEqualTo(unit.stats.move) 
      : false;
  }
  process(event: MovementEvent, state: GameState) {
    return state.withUnitMoved(event.oldLocation, event.newLocation);
  }
}

// export class AttackEventProcessor implements EventProcessor<AttackEvent> {
//   validate(event: AttackEvent, state: GameState) {
//   }
//   process(event: AttackEvent, state: GameState) {
//   }
// }