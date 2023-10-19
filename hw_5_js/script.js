// 1 Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить  
//    назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати                    кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// 2 Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

// 3 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.


let shopping = [
    {
        name: 'milk',
        amount: 5,
        buy: true,
        price: 30,
        total: 5 * 30,
    },
    {
        name: 'sugar',
        amount: 3,
        buy: false,
        price: 20,
        total: 3 * 20,
    },
    {
        name: 'potato',
        amount: 6,
        buy: true,
        price: 30,
        total: 6 * 30,
    },
    {
        name: 'coffee',
        amount: 7,
        buy: false,
        price: 150,
        total: 7 * 150,
    },
]

console.log(shopping);

let newShopping = [];

function myList (){
    for (let i = 0; i < shopping.length; i++){
        if(shopping[i].buy === false){
            newShopping.unshift(shopping[i]);
        } else if(shopping[i].buy === true){
            newShopping.push(shopping[i]);
        }
    }
}
myList();
console.log(newShopping);

function buying (name) {
    for(let i = 0; i < shopping.length; i++){
        if(shopping[i].name === name){
           shopping[i].buy = true; 
        } 
    }
}

buying('sugar');

let newShopping2 = shopping.slice();

function deletion (name) {
    for(let i = 0; i < newShopping2.length; i++){
        if(newShopping2[i].name === name){
           delete newShopping2 [i];
        } 
    }
}

deletion('milk');
console.log(newShopping2);

// function add (name, amount, buy, price, total){
//     for(let i = 0; i < shopping.length; i++){
//         if(name === shopping[i].name){
//             amount = shopping[i].amount + amount;
//         }
//     }
//         let prod = new Object;
//         prod.name = name;
//         prod.amount = amount;
//         prod.buy = buy;
//         prod.price = price;
//         prod.total = total;
//         shopping.push(prod);
//      }
    
//     add('milk', 10, false, 40, 400);