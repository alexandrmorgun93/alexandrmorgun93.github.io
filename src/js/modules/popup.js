module.exports = (popupBtn, popup, popupText, popupClose) => {


    for (let i = 0; i < popupBtn.length; i++) {
        popupBtn[i].addEventListener('click', () => {
            let textElem = popupBtn[i].querySelector('.projects_title_wrap>p').innerHTML;
            popupText.innerHTML = textElem;
            popup.classList.add('active');
        });
    }
    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) {
            popup.classList.remove('active');
        }
    });

};