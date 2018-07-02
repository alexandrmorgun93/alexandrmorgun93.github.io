module.exports = (tabList, tabElement) => {
    for (let i = 0; i < tabList.length; i++) {
        let tabBtn = tabList[i];
        tabBtn.n = i;
        tabBtn.addEventListener('click', function () {
            for (let j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('active');
                tabElement[j].classList.remove('active');
            }
            this.classList.add('active');
            tabElement[this.n].classList.add('active');
        });
    }
};