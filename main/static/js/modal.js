const modal = document.getElementById('modal');
const openModalBtns = document.getElementsByClassName('openModalBtn'); // Используем множественное число для переменной
const closeModalBtn = document.getElementById('closeModalBtn');

// Открываем модальное окно
Array.from(openModalBtns).forEach(btn => { // Преобразуем коллекцию в массив и перебираем
    btn.addEventListener('click', () => {
        modal.style.display = 'flex'; // Убедитесь, что display установлен в flex
    });
});

// Закрываем модальное окно
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('.header__toggle').addEventListener('click', function () {
    document.querySelector('.header__links').classList.toggle('active');
});