import {Tile} from '../map/map';
import {Unit} from '../unit/unit';
import {Integer} from '../math/integer';

export class GameState {
  readonly tiles: Map<[Integer, Integer], Tile>;
  readonly units: Map<[Integer, Integer], Unit>;
  readonly ct: Map<Unit, Integer>;

  constructor(tiles: Map<[Integer, Integer], Tile>, units: Map<[Integer, Integer], Unit>) {
    this.tiles = tiles;
    this.units = units;
    this.ct = new Map<Unit, Integer>();
    Array.from(units.values()).forEach(unit => this.ct.set(unit, Integer.from(0)));
  }

  get coordinates(): Array<[Integer, Integer]> {
    return Array.from(this.tiles.keys());
  }

  get height(): number {
    return Array.from(this.tiles.keys())
      .map((coord: [Integer, Integer]) => coord[1])
      .reduce((a: Integer, b: Integer) => a.greaterThan(b) ? a : b)
      .value + 1;
  }

  get width(): number {
    return Array.from(this.tiles.keys())
      .map((coord: [Integer, Integer]) => coord[0])
      .reduce((a: Integer, b: Integer) => a.greaterThan(b) ? a : b)
      .value + 1;
  }

  coordinateAt(x: number, y: number): [Integer, Integer] {
    const coord = this.coordinates
      .filter(coord => coord[0].equals(Integer.from(x)))
      .filter(coord => coord[1].equals(Integer.from(y)))
      .pop();
    if (coord) {return coord;}
    throw new RangeError();
  }

  withUnitAt(location: [Integer, Integer], unit: Unit): GameState {
    let copy = new Map(this.units);
    copy.set(location, unit);
    return this.tiles.has(location) ? new GameState(this.tiles, copy) : this;
  }

  withoutUnitAt(location: [Integer, Integer]): GameState {
    let copy = new Map(this.units);
    copy.delete(location);
    return new GameState(this.tiles, copy);
  }

  withUnitMoved(oldLocation: [Integer, Integer], newLocation: [Integer, Integer]): GameState {
    let copy = new Map(this.units);
    let unit = copy.get(oldLocation);
    if (unit && this.tiles.has(newLocation)) {
      copy.delete(oldLocation);
      copy.set(newLocation, unit);
    }
    return new GameState(this.tiles, copy);
  }

  distanceBetween(a: [Integer, Integer], b: [Integer, Integer]): Integer {
    return Integer.abs(a[0].minus(b[0])).plus(a[1].minus(b[1]));
  }
}