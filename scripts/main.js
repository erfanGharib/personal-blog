"use strict";

import change_url_$func, {
    rm_add_nav_btn_class_$func, load_page_$func,
} from './functions.js';
import footer_$node from '../components/footer.js';
import navBar_$node from '../components/navbar.js';
import contact_me_$func from '../components/contact-me.js';

// load html data from components
let page_html_code_$arr = [
    fetch('../components/about-me.html').then(res => res.text()),
    fetch('../components/workSample-grid.html').then(res => res.text()),
    fetch('../components/contact-me.html').then(res => res.text())
];

// load work sample data from json file
let nav_btn_$dom = document.querySelectorAll('.nav-btn');
let body_$dom = document.querySelector('body');
let main_$dom = document.querySelector('main');

// main_$dom.innerHTML=contact_me_$func();
main_$dom.parentNode.insertBefore(navBar_$node, main_$dom);
main_$dom.appendChild(footer_$node);

/*
    * load google translate api
    * remove unwanted elements
*/
window.addEventListener('load', () => {
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
        document.querySelector('#goog-gt-tt').style.display = 'none';
        body_$dom.style.top = 0;
    }, 10);

    load_page_$func();
});

export default page_html_code_$arr;
export {
    nav_btn_$dom, body_$dom,
    main_$dom,
}