import {Tile} from '../map/map';
import {Integer} from '../math/integer';

export const TEST_MAP: Map<[Integer, Integer], Tile> = new Map()
  .set([Integer.from(0), Integer.from(0)], new Tile(0))
  .set([Integer.from(0), Integer.from(1)], new Tile(0))
  .set([Integer.from(1), Integer.from(0)], new Tile(0))
  .set([Integer.from(1), Integer.from(1)], new Tile(0));