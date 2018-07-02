;
(() => {
    'use strict';

    /*variables*/
    // top slider
    let slider = document.querySelectorAll('.slide_element');
    let dotsWrap = document.querySelector('.dots_slider');
    let arrDote = [];
    let yak = 0;
    let timer = null;
    let nextSlide = document.querySelector('.right_slide');
    let prevSlide = document.querySelector('.left_slide');
    if (slider !== null) {
        (require('./modules/top-slide'))(slider, dotsWrap, arrDote, yak, timer, nextSlide, prevSlide);
    }

    let btnMenu = document.querySelector('.menu_btn');
    let menu = document.querySelector('.main_head');


    btnMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    /*animation*/
    let arrAnimation = document.querySelectorAll('.animation');
    let addAnimation = null;
    if (arrAnimation.length > 0) {
        addAnimation = require('./modules/animation');
        addAnimation(arrAnimation);
    }
    window.addEventListener('scroll', () => {
        if (addAnimation !== null) {
            addAnimation(arrAnimation);
        }
    });

    let popupBtn = document.querySelectorAll('.projects_element');
    let popup = document.querySelector('.popup');
    let popupText = popup.querySelector('.popup_text');
    let popupClose = document.querySelector('.popup_close');

    if (popupBtn !== null) {
        (require('./modules/popup'))(popupBtn, popup, popupText, popupClose);
    }


    let headDropNav = document.querySelector('.drop_nav');
    let headDropElem = document.querySelector('.drop_nav_element');
    // let headCloseDrop = document.querySelector('.close_drop');
    headDropNav.addEventListener('click', () => {
        headDropElem.classList.toggle('active');
    });
    // headCloseDrop.addEventListener('click', () => {
    //     headDropElem.classList.remove('active');
    // });

    const arrTitleBg = document.querySelectorAll('.main_title>span');
    let moveTitle = require('./modules/movetitle-bg.js');
    window.addEventListener('scroll', () => {

        /*move title bg*/

        if (arrTitleBg && window.innerWidth > 750) {
            moveTitle(arrTitleBg);
        }
    });

    let popupForm = document.querySelector('.popup_form');
    let popupFormBtn = document.querySelectorAll('.popupForm_btn');
    let popupFormClose = document.querySelector('.popup_closeForm');

    for (let i = 0; i < popupFormBtn.length; i++) {
        popupFormBtn[i].addEventListener('click', () => {
            popupForm.classList.add('active');
        });
    }
    popupFormClose.addEventListener('click', () => {
        popupForm.classList.remove('active');
    });
    let slick = require('slick-carousel');

    $('.clients_slide').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev"><i class="icon-left-small"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i  class="icon-right-small"></i></button>`,

    });
    // works - slider
    $('.works_photo_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // useTransform: true,
        arrows: false,
        asNavFor: '.slide_text_content,slide_nav_content'
    });

    $('.slide_text_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        arrows: true,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev"><i class="icon-left-small"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i  class="icon-right-small"></i></button>`,
        asNavFor: '.works_photo_content,.slide_nav_content'
    });
    $('.slide_nav_content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.works_photo_content,.slide_text_content',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '15px',
        arrows: false,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
    // SLIDER PACkAGES
    const packages = document.querySelector('.packages_slider');
    if (packages !== null) {
        (require('./modules/slider-home'))(packages);
    }

    /*counters*/

    const countersWrap = document.querySelector('.about_content');
    const countersElem = document.querySelectorAll('.about_element_head h3 span');
    let counterYak = true;
    window.addEventListener('scroll', () => {
        if (addAnimation !== null) {
            addAnimation(arrAnimation);
        }
        /*counters*/
        if (countersWrap !== null && countersWrap.getBoundingClientRect().top - window.innerHeight * .8 < 0 && counterYak) {
            counterYak = false;
            let moveCounter = require('./modules/counter');
            for (let i = 0; i < countersElem.length; i++) {
                moveCounter(countersElem[i]);
            }
        }
    });
    // tabs

    let tabList = document.querySelectorAll('.tabs_btn');
    let tabElement = document.querySelectorAll('.tabs_content');


    if (tabList !== null) {
        (require('./modules/tabs'))(tabList, tabElement);
    }
    

})();
