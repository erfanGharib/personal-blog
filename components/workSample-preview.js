let work_sample_preview_$d_html;
let work_sample_$data = fetch('../data/workSample-data.json').then((res) => res.json());

let return_work_sample_preview_$func =(data_num)=> {
    return work_sample_preview_$d_html = work_sample_$data.then((data) => {
        return (`
            <div id="ws-info-overlay" class="fixed py-10 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
                <div id="ws-preview" class="flex justify-between xl:flex-row flex-col-reverse h-110 md:h-100 border-1 overflow-y-auto text-dark-gray dark-gray w-11/12">
                    <img class="w-full xl:w-auto xl:h-full" src="../assets/images/workSample-images/${data[data_num].img_src}" alt="${data[data_num].name}">
                    
                    <div id="es" class="flex flex-col w-full h-full p-5">
                        <i 
                            title="close" 
                            id="close-btn"
                            class="ico-x w-5 opacity-40 hover:opacity-100 cursor-pointer mb-auto ml-auto bg-cover h-5 block"
                        ></i>
                        <h2 class="text-light-gray text-xl">
                            Name: 
                            <span class="skiptranslate text-dark-gray">${data[data_num].name}</span>
                        </h2>
                        <h2 class="text-light-gray text-xl mt-2">
                            information: 
                            <span class="font-light text-lg text-dark-gray">${data[data_num].info}</span>
                        </h2>
                        <a href="${data[data_num].link}" class="w-20 mt-5 light-green opacity-50 hover:opacity-100 hover:underline font-light">see project</a>
                    </div>
                </div>
            </div>
        `)
    });
}

export default return_work_sample_preview_$func;
export { work_sample_preview_$d_html };