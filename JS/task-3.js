const password = prompt('Please enter your password');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
console.log(password);

if (password === null) {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль';
}
console.log(message);
