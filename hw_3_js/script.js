// 1. Створіть об'єкт room з параметри:
// ключ height зі значенням 3
// ключ tv зі значенням samsung
// ключ big зі значенням true

let room = {
    height: 3,
    tv: 'samsung',
    big: true,
}

// 2 Виведіть в alert тип даних параметра big

let type = alert(typeof room.big);

// 3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
let user = {
  name: "John",
  age: 30,
};

console.log(user);
console.log(user.age);

// 4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
}

let bob = '';

for(let key in users){
  if (users[key].name === "Bob") {
    bob = users[key];
    break;
  }
}

console.log(bob);

// 5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".

for(let key in users){
  if(users[key].name === "Anna"){
    delete users[key];
    break;
  }
}

console.log(users);

// Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id

const obj = {
  id: 5,
  token: 12343423
};

const ID = obj['id'];

console.log(ID);

// 6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let distance = prompt('Введіть відстань (км):');
const tripDetails = car.calculateSpeed(distance);

const car = {
  mark: "Toyota",
  model: "Corolla",
  year: 2022,
  averageSpeed: 80,
  fuelTankCapacity: 50, 
  fuelConsumption: 7, 
  drivers: ['Ivan', 'Igor', ],
  displayInfo () {
    console.log(`mark ${this.mark}, model ${this.model}, year ${this.year}, averageSpeed ${this.averageSpeed}, 
    fuelTankCapacity ${this.fuelTankCapacity}, fuelConsumption ${this.fuelConsumption}, drivers ${this.drivers} `);
  },
  driverAdd () {
    let name = prompt('Введіть водія');
    car.drivers.push(name);
  },
  driverCheck () {
    let name = prompt('Введіть водія, якого треба знайти')
      if(this.drivers.includes(name)){
        console.log('такий водій є в базі')
      } else {
        console.log('водій у списку відсутній')
      }
    },
    calculateSpeed () {
      let travelTime = distance / this.averageSpeed;
      let numberOfBreaks = Math.floor(travelTime/ 4);
      let totalBreakTime = numberOfBreaks * 1;
      let totalTravelTime = travelTime + totalBreakTime;
      let fuelNeeded = (distance / 100) * this.fuelConsumption;
      return [totalTravelTime, fuelNeeded];
    },
  }


car.displayInfo();
car.driverAdd();
car.displayInfo();
car.driverCheck();
console.log(tripDetails);
console.log()





