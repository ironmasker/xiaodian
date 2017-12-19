export class Point {

  draw() {
      console.log('x: ' + this._x + ', y: ' + this._y);
  }

  constructor(private _x?: number, private _y?: number) {
  }

  get x() {
      return this._x;
  }

  get y() {
      return this._y;
  }
}