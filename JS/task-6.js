let input;
let total = 0;

do {
  input = prompt('Будьте любезны, нажмите цифру');
  if (isNaN(input)) {
    alert('Я ПРОСИЛ ЧИСЛО');
  } else {
    total += +input;
  }
  console.log('Число которое ввели', input);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
console.log(total);
