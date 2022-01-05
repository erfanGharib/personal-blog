"use strict";

import change_url_$func, {
    rm_add_nav_btn_class_$func, load_page_$func,
} from './functions.js';

// load html data from components
let page_html_code_$arr = [
    fetch('../components/about-me.html').then(res => res.text()),
    fetch('../components/workSample-grid.html').then(res => res.text()),
    fetch('../components/contact-me.html').then(res => res.text())
];
// page urls and titles
let page_title_url_$arr = [
    {
        title: 'About Me | Erfan Gharib',
        url: 'about-me'
    },
    {
        title: 'Work Sample',
        url: 'work-sample'
    },
    {
        title: 'Contact Me',
        url: 'contact-me'
    },
];

// load work sample data from json file
let nav_btn_$dom = document.querySelectorAll('.nav-btn');
let body_$dom = document.querySelector('body');
let main_$dom = document.querySelector('main');
let ham_menu_btn_$dom = document.querySelector('#ham-menu-btn');
let ham_menu_line_$dom = document.querySelectorAll('.ham-menu-line');
const page_URL = new URL(window.location);
const ls = localStorage;
let num=0;

// set a default data in ls
if(ls.getItem('current_page_index')===null) {
    ls.setItem('current_page_index', 0);
}

// add event on nav btn to load data by clicking on them
page_html_code_$arr.forEach((value, index) => {
    value.then(() => {
        nav_btn_$dom[index].addEventListener('click', function () {
            switch (index) {
                case 2:
                    main_$dom.classList.add('h-full');
                    break;
                default:
                    main_$dom.classList.remove('h-full');
                    break;
            }

            localStorage.setItem('current_page_index', index);
            load_page_$func();
            change_url_$func(
                page_title_url_$arr[index].title, 
                page_title_url_$arr[index].url
            );

            rm_add_nav_btn_class_$func(index);

            num = index;
        })
    })
});

// display ham menu , animate ham icon
ham_menu_btn_$dom.addEventListener('click', ()=>{
    let tailwind_class_$arr = ['hidden', 'flex'];
    for (let index = 0; index <= 1; index++) {
        document.querySelector('#menu').classList.toggle(tailwind_class_$arr[index]);
        ham_menu_line_$dom[index].classList.toggle(`ham-menu-line-${index}`);
    }
});

/*
    * load google translate api
    * remove unwanted elements
*/ 
window.addEventListener('load', ()=>{
    google.translate.TranslateElement({
            pageLanguage: 'en', 
            includedLanguages: 'en,fa', 
            autoDisplay: false
        }, 
        'google_translate_element'
    )
    google_translate_element.querySelector('div').childNodes[2].remove()
    google_translate_element.querySelector('div').childNodes[1].remove()
    
    setInterval(() => {
        document.querySelector('#goog-gt-tt').style.display='none';
        body_$dom.style.top=0;
    }, 10);

    load_page_$func();
});

export default page_html_code_$arr;
export {
    nav_btn_$dom, body_$dom,
    main_$dom, page_URL, ls, num
}