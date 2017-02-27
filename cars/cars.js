// var cars = ["Ferrari", "McLaren", "Red Bull", "Toro Rosso", "Haas"]
//
// function displayCars() {
//   console.log(cars);
// }
//
// function addCar(car) {
//   cars.push(car);
//   displayCars();
// }
//
// function changeCar(position, newCar) {
//   cars[position] = newCar;
//   displayCars();
// }
//
// function deleteCar(position) {
//   cars.splice(position, 1);
//   displayCars();
// }

// This code above here works just fine, but not as robust as we want it.

var f1 = {
  cars: ["Ferrari", "McLaren", "Haas", "Red Bull", "Toro Rosso"],
  displayCars: function() {
    console.log("Formula 1 cars: ", this.cars);
  },
  addCar: function(car) {
    this.cars.push(car);
    this.displayCars();
  },
  changeCar: function(position, newCar) {
    this.cars[position] = newCar;
    displayCars();
  },
  deleteCar: function(position) {
    this.cars.splice(position, 1);
    this.displayCars();
  }
};
