class Car {
    constructor(brand, speedKmh) {
      this.brand = brand;
      this._speedKmh = speedKmh;
    }
  
    get speedUS() {
      return this._speedKmh / 1.6;
    }
  
    set speedUS(speedMph) {
      this._speedKmh = speedMph * 1.6;
    }
  
    accelerate(acceleration) {
      this._speedKmh += acceleration;
      console.log(`${this.brand} ускорился и движется со скоростью ${this._speedKmh} км/ч.`);
    }
  
    brake(deceleration) {
      this._speedKmh -= deceleration;
      console.log(`${this.brand} замедлился и движется со скоростью ${this._speedKmh} км/ч.`);
    }
}
  
const ford = new Car("Форд", 120);
console.log(ford.speedUS);
  
ford.speedUS = 60;
console.log(ford.speedUS); 
  
ford.accelerate(20);
ford.brake(10);
