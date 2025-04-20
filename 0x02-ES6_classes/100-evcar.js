import Car from "./10-car.js"

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
  return new Car(this.brand, this.motor, this.color)
  }
}
