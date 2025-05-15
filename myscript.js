let cartQuantity = 0;

function myCartQuantity() {
  cartQuantity = cartQuantity;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function myAddQuantity() {
  cartQuantity = cartQuantity + 1;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function myPlusTwo() {
  cartQuantity = cartQuantity += 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function myPlusThree() {
  cartQuantity = cartQuantity += 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function myReset() {
  cartQuantity = 0;
  console.log("Cart was Reset");
  console.log(`Cart quantity: ${cartQuantity}`);
}

const cars = ["BMW", "Volvo", "Saab"];
console.log(cars);
console.log(cars[1]);

cars.push = "Nissan";
cars[2] = "Jeep";
console.log(cars[2]);

const names = ["Emmanuel", "Caleb", "Pascal"];
console.log(names);

names.push = "Rejoice";
names[0] = "Aboi";

function toCelcius(f) {
  return (5 / 9) * (f - 32);
  if (true !== false) {
    return true;
  }
  return false;
}
let temp = toCelcius(78);

console.log(temp);

const emma = {
  firstName: "Obiabo",
  lastName: "Emmanuel",
  age: 23,
  complexion: "Dark",
  eyeColor: "white",
  weight: 62 + "kg",
};

console.log(emma);
console.log(emma.age);

const numbs = [33, 55, 10, 60, 3, 5, 7];
const get_max = Math.max(...numbs);

console.log(get_max);

let mult = myFunction(4, 5);

function myFunction(a, b) {
  return a * b;
}

console.log(mult);
