const credits = 23580;
const pricePerDroid = 3000;
const droids = +prompt('Какое количество Вы хотите купить');
let order;
let orderPrise;

if (droids === null) {
  order = 'Отменено пользователем!';
} else {
  order = pricePerDroid * droids;
}
console.log(order);
if (order <= credits) {
  orderPrise = `Вы купили ${droids} дроидов, на счету осталось ${
    credits - order
  } кредитов.`;
} else {
  orderPrise = 'Недостаточно средств на счету!';
}
console.log(orderPrise);
