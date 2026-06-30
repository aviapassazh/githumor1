(function() {
const lockScreen = document.getElementById('lockScreen');
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const content = document.getElementById('content');

const SECRET_PASSWORD = 'din';

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем перезагрузку страницы
    if (passwordInput.value === SECRET_PASSWORD) {
    lockScreen.style.display = 'none';
    content.style.display = 'block';
    } else {
    alert('Неверный пароль');
    }
    passwordInput.value = '';
});
})();
  