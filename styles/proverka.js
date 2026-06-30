window.addEventListener('resize', () => { 
    if (window.innerWidth < 1400 && window.innerHeight < 750) {
    alert('Установите полноэкранный режим и перезапустите приложение.');                                                           }
});
window.addEventListener('load', () => { 
    if (window.innerWidth < 1400 && window.innerHeight < 750) {
    alert('Размер окна недостаточен для полноценного и качественного отображения всех элементов. Лучше использовать полноэкранный режим.');                                                           }
});
