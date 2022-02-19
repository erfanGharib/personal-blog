// import return_work_sample_$func, {
//     work_sample_$d_html, work_sample_$data
// } from '../components/portfolio.js';

// import return_work_sample_preview_$func, { 
//     work_sample_preview_$d_html
// } from '../components/portfolio';

import page_html_code_$arr, {
    nav_btn_$dom, body_$dom,
    main_$dom,
} from './main.js';

// load all work samples from json file
let load_work_samples_$func = () => {
    work_sample_$data.then((data) => {
        data.forEach((value, index) => {
            return_work_sample_$func(index);
            work_sample_$d_html.then((html_data) => {
                document.querySelector('#work-sample-grid').innerHTML += html_data;
            })
            .then(() => work_sample_events_$func(index));
        })
    });
};

// set event listener on work samples
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

// remove work sample preview
let close_ws_preview_$func =(this_)=>{
    this_.target.parentElement.parentElement.parentElement.parentElement.remove();
};

// load page content
let load_page_$func =()=> {
    page_html_code_$arr[ls.getItem('current_page_index')]
        .then(data => main_$dom.innerHTML = data)
        .then(()=>{
            if(ls.getItem('current_page_index')==1) {
                load_work_samples_$func();
            }
        })
    rm_add_nav_btn_class_$func(ls.getItem('current_page_index'));
}

// change page title and url
let change_url_$func =(title, url_)=>{
    document.querySelector('title').innerText = title;
    page_URL.searchParams.set('loc', url_);
    window.history.pushState({}, '', page_URL);
};

// remove/add nav button style class
let rm_add_nav_btn_class_$func =(class_num)=>{
    nav_btn_$dom.forEach((value)=>{
        value.classList.remove('light-green');
    });
    nav_btn_$dom[class_num].classList.add('light-green');
}

export default change_url_$func
export {
    rm_add_nav_btn_class_$func, load_page_$func
}