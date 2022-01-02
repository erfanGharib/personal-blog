"use strict";

import return_work_sample_$func, {
    work_sample_$d_html, work_sample_$data
} from '../components/workSample.js';

import return_work_sample_preview_$func, { 
    work_sample_preview_$d_html 
} from '../components/workSample-preview.js';

// load html data from components
let page_html_code_$arr = [
    fetch('../components/about-me.html'),
    fetch('../components/workSample-grid.html'),
    fetch('../components/contact-me.html')
];
let page_title_$arr = [
    'About Me | Erfan Gharib',
    'Work Sample',
    'Contact Me'
];

// load work sample data from json file
let nav_btn_$dom = document.querySelectorAll('.nav-btn');
let body_$dom = document.querySelector('body');
let main_$dom = document.querySelector('main');
let ham_menu_btn_$dom = document.querySelector('#ham-menu-btn');
let ham_menu_line_$dom = document.querySelectorAll('.ham-menu-line');
let num=0;

let load_work_samples_$func = () => {
    work_sample_$data.then((data) => {
        data.forEach((value, index) => {
            return_work_sample_$func(index);
            work_sample_$d_html.then((html_data) => {
                document.querySelector('#work-sample').innerHTML += html_data;
            })
            .then(() => work_sample_events_$func(index));
        })
    });
};

let work_sample_events_$func = (num) => {
    document.querySelectorAll('.work-sample-boxes')[num].addEventListener('click', () => {
        return_work_sample_preview_$func(num);
        work_sample_preview_$d_html.then((html_data) => {
            let div = document.createElement("div");
            div.classList.add('ws-info-overlay');
            div.innerHTML=html_data;
            body_$dom.appendChild(div);

            document.querySelector('#close-btn').addEventListener('click', close_ws_preview_$func);
        })
    })
};

let close_ws_preview_$func =(this_)=>{
    this_.target.parentElement.parentElement.parentElement.parentElement.remove();
}

// add event on nav btn to load data by clicking on them
page_html_code_$arr.forEach((value, index) => {
    value.then((res) => res.text())
    .then((data) => {
        nav_btn_$dom[index].addEventListener('click', function () {
            if (index === 1) load_work_samples_$func();
            if (index === 2) main_$dom.classList.add('h-full');
            else main_$dom.classList.remove('h-full');

            document.querySelector('title').innerText = page_title_$arr[index];

            nav_btn_$dom[num].classList.remove('light-green');
            nav_btn_$dom[index].classList.add('light-green');

            main_$dom.innerHTML = data;
            num = index;
        })
    })
});

ham_menu_btn_$dom.addEventListener('click', ()=>{
    let tailwind_class_$arr = ['hidden', 'flex'];
    for (let index = 0; index <= 1; index++) {
        document.querySelector('#menu').classList.toggle(tailwind_class_$arr[index]);
        ham_menu_line_$dom[index].classList.toggle(`ham-menu-line-${index}`);
    }
});

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
    }, 10)
});
