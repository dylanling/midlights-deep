import {Integer} from '../math/integer';

export class Tile {
  private _height: Integer;

  constructor(height: Integer) {
    this._height = height;
  }

  height = () => this._height;
}