//import {Tile} from '../../sim/map/map';
import * as Unit from '../../sim/unit/unit';
import {TEST_MAP} from '../../sim/data/maps';
import * as Jobs from '../../sim/data/jobs';
import {GameState} from '../../sim/battle/gamestate';
import {MovementEvent} from '../../sim/battle/event';
import {Integer} from '../../sim/math/integer';

const unit: Unit.Unit = new Unit.Unit(
  'test unit',
  Unit.Zodiac.AQUARIUS,
  Unit.Gender.FEMALE,
  Unit.Stats.from(1,1,1,1,1,1,1,1,1,1,1,1),
  Jobs.KNIGHT,
  new Unit.UnitAbilities(Jobs.KNIGHT),
  new Unit.UnitEquipment(),
  Unit.Direction.EAST
);

const units: Map<[Integer, Integer], Unit.Unit> = new Map()
  .set(Array.from(TEST_MAP.keys())
  .filter(location => location[0].equals(Integer.from(0)))
  .filter(location => location[1].equals(Integer.from(0)))
  .pop(), unit);

const gamestate: GameState = new GameState(TEST_MAP, units);

const event: MovementEvent = new MovementEvent(
  gamestate.coordinateAt(0,0),
  gamestate.coordinateAt(1,1)
);

describe('TEST_MAP', () => {
  it('should have tiles at height 0', () => {
    TEST_MAP.forEach((tile, location, map) => 
      expect(tile.height).toBe(0));
  });
});

describe('gamestate', () => {
  it('should have a unit at [0,0]', () => {
    expect(gamestate.units.get(gamestate.coordinateAt(0,0))).toBe(unit);
  });

  it('should not have a unit anywhere else', () => {
    gamestate.coordinates
      .filter(coord => coord !== gamestate.coordinateAt(0,0))
      .forEach((coord) => expect(gamestate.units.has(coord)).toBe(false));
  });

  it('should move the unit after processing event', () => {
    const newState: GameState = event.processor().process(event, gamestate);
    expect(newState.units.get(gamestate.coordinateAt(1,1))).toBe(unit);
    expect(newState.units.has(gamestate.coordinateAt(0,0))).toBe(false);
  });
});