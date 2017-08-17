import * as React from 'react';
import './Game.css';
import * as Unit from './sim/unit/unit';
import {GameState} from './sim/battle/gamestate';
import {Game} from './sim/game';
//import {Tile} from './sim/map/map';
import {TEST_MAP} from './sim/data/maps';
import * as Jobs from './sim/data/jobs';
import {MovementEvent} from './sim/battle/event';
import {Integer} from './sim/math/integer';

function BattleTile(props: any) {
  const unit: Unit.Unit = props.unit;
  return (
    <button className="tile" onClick={props.onClick}>
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
                        onClick={() => props.onTileClick(gamestate.coordinateAt(x, y))}
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

class Battle extends React.Component {
  game: Game;
  selected?: [Integer, Integer];

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
    
    this.game = new Game(new GameState(TEST_MAP, units));
  }

  setSelected = (coord?: [Integer, Integer]): void => {
    this.selected = this.selected === coord ? undefined : coord;
    this.setState({
      game: this.game,
      selected: this.selected,
    });
  }

  moveSelected = (coord: [Integer, Integer]): void => {
    if (this.selected && this.game.current.units.has(this.selected)) {
      this.game.update(new MovementEvent(this.selected, coord));
    }
  }

  handleSelection = (coord: [Integer, Integer]): void => {
    if (this.selected) {
      this.moveSelected(coord);
      this.setSelected(undefined);
    } else {
      this.setSelected(coord);
    }
  }

  render() {
    return (
      <div>
        <div className="battle-map">
          <BattleMap
            state={this.game.current}
            onTileClick={(coord: [Integer, Integer]) => this.handleSelection(coord)}
          />
        </div>
        <div className="selected">
          {'selected: ' + coordToString(this.selected)}
        </div>
      </div>
    );
  }
}

function range (start: number, end: number): Array<number> {
  return Array.from({length: (end - start)}, (v, k) => k + start);
}

function coordToString(coord?: [Integer, Integer]): string {
  return coord ? '(' + coord[0].value + ', ' + coord[1].value + ')' : '';
}

export default Battle;