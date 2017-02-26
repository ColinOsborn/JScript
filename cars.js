var cars = ["Ferrari", "McLaren", "Red Bull", "Toro Rosso", "Haas"]

function displayCars() {
  console.log(cars);
}

function addCar(car) {
  cars.push(car);
  displayCars()
}

function changeCar(position, newCar) {
  cars[position] = newCar;
  displayCars()
}
