module.exports = (slider) => {
    const sliderAbsolute = slider.querySelector('.packages_slider_absolute');
    const offerContent = slider.querySelector('.packages_slider_content');
    const left = slider.querySelector('.left_slider');
    const right = slider.querySelector('.right_slider');
    let widthElem = 33.33;
    const arrElem = slider.querySelectorAll('.tabs_element_wrap');
    let arrElemMove = slider.querySelectorAll('.tabs_element_wrap.visible');
    let lengthArr = arrElemMove.length;
    let yaks = 0;
    let count = 3;
    let widthElemOffer = offerContent.clientWidth / count;
    let maxLengthArr = lengthArr - count;
    let widthBlock = (lengthArr * widthElem).toFixed(2);
    sliderAbsolute.style.width = `${widthBlock}%`;
    let stopTimeOut = null;
    let stopDefSlider = null;


    function adaptivelyWidth() {
        if (window.innerWidth > 1300) {
            widthElem = 33.33;
            count = 3;
            widthElemOffer = offerContent.clientWidth / count;
        }
        if (window.innerWidth < 1280) {
            widthElem = 50;
            count = 2;
            widthElemOffer = offerContent.clientWidth / count;
        }
        if (window.innerWidth < 835) {
            widthElem = 100;
            count = 1;
            widthElemOffer = offerContent.clientWidth / count;
        }
        maxLengthArr = lengthArr - count;
        widthBlock = (lengthArr * widthElem).toFixed(2);
        sliderAbsolute.style.width = `${widthBlock}%`;

        for (let i = 0; i < arrElem.length; i++) {
            arrElem[i].style.maxWidth = `${widthElemOffer}px`;
        }
    }

    adaptivelyWidth();

    function moveAll() {
        arrElemMove = slider.querySelectorAll('.tabs_element_wrap.visible');
        lengthArr = arrElemMove.length;
        maxLengthArr = lengthArr - count;
        yaks = 0;
        widthBlock = (lengthArr * widthElem).toFixed(2);
        sliderAbsolute.style.width = `${widthBlock}%`;
        sliderAbsolute.style.left = `${yaks}%`;
        if (lengthArr <= count) {
            left.classList.add('none');
            right.classList.add('none');
        } else {
            left.classList.remove('none');
            right.classList.remove('none');
        }
    }


    function lastElem(boll, int) {
        if (boll) {
            return (int + 1 <= maxLengthArr) ? int + 1 : 0;
        } else {
            return (int - 1 >= 0) ? int - 1 : maxLengthArr;
        }
    }

    function moveSliders(boll) {
        adaptivelyWidth();
        yaks = lastElem(boll, yaks);
        sliderAbsolute.style.left = `${-widthElem * yaks}%`;
    }


    function moveDefSlider() {
        stopDefSlider = setInterval(() => {
            moveSliders(true);
        }, 5000);
    }

    right.addEventListener('click', () => {
        clearTimeout(stopTimeOut);
        moveSliders(true);
        clearInterval(stopDefSlider);
        stopTimeOut = setTimeout(() => {
            moveDefSlider();
        }, 3000);
    });
    left.addEventListener('click', () => {
        clearTimeout(stopTimeOut);
        moveSliders(false);
        clearInterval(stopDefSlider);
        stopTimeOut = setTimeout(() => {
            moveDefSlider();
        }, 3000);
    });


    for (let i = 0; i < arrElem.length; i++) {
        arrElem[i].addEventListener('mouseenter', () => {
            clearTimeout(stopTimeOut);
            clearInterval(stopDefSlider);
        });
        arrElem[i].addEventListener('mouseleave', () => {
            stopTimeOut = setTimeout(() => {
                moveDefSlider();
            }, 3000);
        });
    }

    moveDefSlider();

    let initialPoint;
    let finalPoint;
    slider.addEventListener('touchstart', function (event) {
        initialPoint = event.changedTouches[0];
    }, false);
    slider.addEventListener('touchend', function (event) {
        finalPoint = event.changedTouches[0];
        let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        if (xAbs > 20) {
            if (finalPoint.pageX < initialPoint.pageX) {
                clearTimeout(stopTimeOut);
                moveSliders(true);
                clearInterval(stopDefSlider);
                stopTimeOut = setTimeout(() => {
                    moveDefSlider();
                }, 3000);
            } else {
                clearTimeout(stopTimeOut);
                moveSliders(false);
                clearInterval(stopDefSlider);
                stopTimeOut = setTimeout(() => {
                    moveDefSlider();
                }, 3000);
            }
        }
    }, false);

};