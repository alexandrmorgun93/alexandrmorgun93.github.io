module.exports = (text) => {
    /*Variables*/
    let count = text.innerHTML;
    let int = 0;
    let step = 1;

    /*Functions*/
    function replacer() {
        return '';
    }

    function comma(str) {
        return (str > 1000) ? `${str.slice(0, -3)}${def}${str.slice(-3)}` : str;
    }

    /*Execution*/
    let countNumber = count.replace(/\D/g, replacer);
    let def = (count.indexOf(',') >= 0) ? ',' : ' ';
    if (+countNumber > 0) {
        step = 1;
    }
    if (+countNumber > 7) {
        step = 3;
    }
    // if (+countNumber > 385) {
    //     step = 200;
    // }

    let stopInterval = setInterval(() => {

        text.innerHTML = comma((int += step) + '');

        if (int >= countNumber) {
            clearInterval(stopInterval);
            text.innerHTML = comma(countNumber + '');
        }

    }, 50);

};
