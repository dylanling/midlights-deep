export class Tile {
  readonly height: number;
  constructor(height: number) {
    this.height = height;
  }
}

export class Map {
  readonly grid: Array<Array<Tile>>;
  constructor(grid: Array<Array<Tile>>) {
    this.grid = grid;
  }
}