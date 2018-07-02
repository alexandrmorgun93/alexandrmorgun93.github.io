let random = require('./random.js');
let direction = 1;

function elementWork(el) {
    return el.getBoundingClientRect().top;
}

module.exports = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (elementWork(arr[i]) < 1000) {
            arr[i].style.transform = `translate3d(${random(-40, 40)}px,${random(-40, 40)}px, 0)`;
        } else {
            direction = 1;
        }
    }
};