const country = prompt('В какую страну доставить товар?');
let prise;

switch (country.toLowerCase()) {
  case 'китай':
    prise = 'Доставка в Китай будет стоить 100 кредитов';
    break;
  case 'чили':
    prise = 'Доставка в Чили будет стоить 250 кредитов';
    break;
  case 'австралия':
    prise = 'Доставка в Австралию будет стоить 170 кредитов';
    break;
  case 'индия':
    prise = 'Доставка в Индию будет стоить 80 кредитов';
    break;
  case 'ямайка':
    prise = 'Доставка в Ямайку будет стоить 120 кредитов';
    break;
  default:
    alert('В вашей стране доставка не доступна');
    console.log(prise);
    console.log(country);
}
