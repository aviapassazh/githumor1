const modal = document.getElementById('myModal');
const span = document.querySelector('.close');

// window.onload = function() { modal.style.display = 'none'; }; перенесено в preloadnew.js
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'din') {
        modal.style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
}
const passwordForm2 = document.getElementById('passwordForm2');
passwordForm2.addEventListener('submit', function(event) {
    event.preventDefault();
    checkPassword();
});

span.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
