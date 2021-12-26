"use strict";

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
let work_sample_$data = fetch('../data/workSample-data.json').then((res) => res.json());
let nav_btn_$dom = document.querySelectorAll('.nav-btn');
let main_$dom = document.querySelector('main');
let ham_menu_line_$dom = document.querySelectorAll('.ham-menu-line');

// add event on nav btn to load data by clicking on them
page_html_code_$arr.forEach((value, index)=>{
    value.then((res)=> res.text())
    .then((data)=>{
        nav_btn_$dom[index].addEventListener('click',function () {
            if(index===2) main_$dom.classList.add('h-full');
            else main_$dom.classList.remove('h-full');

            document.querySelector('title').innerText=page_title_$arr[index];
            for (let btn_num=0;btn_num<=2;btn_num++) {
                nav_btn_$dom[btn_num].classList.remove('light-green');
                nav_btn_$dom[btn_num].classList.add('text-dark-gray');
            }

            nav_btn_$dom[index].classList.add('light-green');
            nav_btn_$dom[index].classList.remove('text-dark-gray');
            main_$dom.innerHTML=data;
        })
    })
});

// add event on ham menu btn
document.querySelector('#ham-menu-btn').addEventListener('click', ()=>{
    document.querySelector('#menu').classList.toggle('hidden');
    ham_menu_line_$dom[0].classList.toggle('ham-menu-line-1')
    ham_menu_line_$dom[1].classList.toggle('ham-menu-line-2');
});