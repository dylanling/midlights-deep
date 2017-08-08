export default class Integer {
  private _value: number;

  private constructor(value: number) {
    this._value = Math.round(value);
  }

  value = (): number => this._value;

  plus = (other: Integer): Integer => 
    Integer.from(this.value() + other.value());

  minus = (other: Integer): Integer => 
    Integer.from(this.value() - other.value());

  times = (other: Integer): Integer => 
    Integer.from(this.value() * other.value());

  dividedBy = (other: Integer): Integer => 
    Integer.from(Math.trunc(this.value() / other.value()));

  roundUpDividedBy = (other: Integer): Integer => 
    this.plus(other).minus(Integer.from(1)).dividedBy(other);

  equals = (other: Integer): boolean =>
    this.value() === other.value();

  greaterThan = (other: Integer): boolean =>
    this.value() > other.value();
  
  greaterThanOrEqualTo = (other: Integer): boolean =>
    this.value() >= other.value();
  
  lessThan = (other: Integer): boolean =>
    this.value() < other.value();

  lessThanOrEqualTo = (other: Integer): boolean =>
    this.value() <= other.value();

  static from = (number: number): Integer =>
    new Integer(number);
  
  static max = (a: Integer, b: Integer): Integer =>
    a.greaterThanOrEqualTo(b) ? a : b;

  static min = (a: Integer, b: Integer): Integer =>
    a.lessThanOrEqualTo(b) ? a : b;

  static random = (min: Integer, max: Integer): Integer =>
    Integer.from(Math.floor(Math.random() * (max.value() - min.value() + 1)) + min.value());

  static readonly MIN = Integer.from(-9999);
  static readonly MAX = Integer.from(9999);
}