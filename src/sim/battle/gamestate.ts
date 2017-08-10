import {Tile} from '../map/map';
import {Unit} from '../unit/unit';

export class GameState {
  readonly tiles: Map<[number, number], Tile>
  readonly units: Map<[number, number], Unit>

  constructor(tiles: Map<[number, number], Tile>, units: Map<[number, number], Unit>) {
    this.tiles = tiles;
    this.units = units;
  }

  withUnitAt(location: [number, number], unit: Unit): GameState {
    let copy = new Map(this.units);
    copy.set(location, unit);
    return this.tiles.has(location) ? new GameState(this.tiles, copy) : this;
  }

  withoutUnitAt(location: [number, number]): GameState {
    let copy = new Map(this.units);
    copy.delete(location);
    return new GameState(this.tiles, copy);
  }

  withUnitMoved(oldLocation: [number, number], newLocation: [number, number]): GameState {
    let copy = new Map(this.units);
    let unit = copy.get(oldLocation);
    if (unit && this.tiles.has(newLocation)) {
      copy.delete(oldLocation);
      copy.set(newLocation, unit);
    }
    return new GameState(this.tiles, copy);
  }
}