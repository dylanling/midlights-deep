import * as React from 'react';
import './Game.css';
import * as Unit from './sim/unit/unit';
import {GameState} from './sim/battle/gamestate';
//import {Tile} from './sim/map/map';
import {TEST_MAP} from './sim/data/maps';
import * as Jobs from './sim/data/jobs';
//import {MovementEvent} from './sim/battle/event';
import {Integer} from './sim/math/integer';


function BattleTile(props: any) {
  const unit: Unit.Unit = props.unit;
  return (
    <button className="tile">
      {unit ? unit.name : ""}
    </button>
  );
}

function BattleMap(props: any) {
  const gamestate: GameState = props.state;
  return (
    <div>
      {
        range(0, gamestate.height)
          .map(y => (
            <div className="battle-map-row">
              {
                range(0, gamestate.width)
                  .map(x => {
                    return (
                      <BattleTile
                        unit={gamestate.units.get(gamestate.coordinateAt(x, y))}
                      />
                    );
                  })
              }
            </div>
          ))
      }
    </div>
  );
}

class Game extends React.Component {
  state: GameState;
  constructor() {
    super();
    const unit = new Unit.Unit(
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
    
    this.state = new GameState(TEST_MAP, units);
  }

  render() {
    return (
      <div className="battle-map">
        <BattleMap
          state={this.state}
        />
      </div>
    );
  }
}

function range (start: number, end: number): Array<number> {
  return Array.from({length: (end - start)}, (v, k) => k + start);
}

export default Game;