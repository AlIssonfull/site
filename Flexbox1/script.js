function menuClick() {
    const nav = document.getElementById('nave');
    const menuIcon = document.querySelector('.material-symbols-outlined');

    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        menuIcon.textContent = 'menu';
    } else {
        nav.style.display = 'flex';
        menuIcon.textContent = 'close';
    }
}
