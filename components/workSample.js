let work_sample_$d_html;
let work_sample_$data = fetch('../data/workSample-data.json').then((res) => res.json());

let return_work_sample_$func =(data_num)=> {
    return work_sample_$d_html = work_sample_$data.then((data) => {
        return (`
            <div class="work-sample-boxes flex w-full mb-5 lg:w-2/7 flex-col">
                <img src="../assets/images/workSample-images/${data[data_num].img_src}" alt="${data[data_num].name}">
                <h2 class="text-2xl my-auto px-4 py-3 font-bold text-light-gray">${data[data_num].name}</h2>
            </div>
        `)
    });
}

export default return_work_sample_$func;
export { work_sample_$d_html, work_sample_$data };