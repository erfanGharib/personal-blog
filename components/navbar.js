const navbar_$html = (
    `<img src="../assets/favicon/my-logo.png" class="h-full pl-5 border-l mr-auto border-darkGray" alt="personal logo">

    <div class="relative h-14 w-full flex justify-end">
        <button id="ham-menu-btn" class="sm:hidden border-r border-darkGray pr-4">
            <span class="ham-menu-line transition duration-200 relative bg-lightGray w-7 block h-1"></span>
            <span class="ham-menu-line transition duration-200 relative bg-lightGray w-7 block mt-1 h-1"></span>
        </button>
        <ul id="menu" class="sm:bg-opacity-0 bg-white w-full mr-3 sm:h-full sm:mr-0 sm:flex sm:flex-row flex-col top-16 absolute sm:top-0 hidden">
            <a class="sm:ml-auto ml-0 px-5 py-4 border-r border-l border-darkGray text-lightGray this-page" href="#">About Me</a>
            <a class="px-5 py-4 border-r border-l border-darkGray text-lightGray" href="#">Portfolio</a>
            <a class="px-5 py-4 border-r border-l border-darkGray text-lightGray" href="#">Contact Me</a>
        </ul>
    </div>`
);

const navBar_$node = document.createElement('nav');
(async () => {
    // render htmls into navbar node 
    navBar_$node.innerHTML = navbar_$html;
    let ham_menu_btn_$dom = await document.querySelector('#ham-menu-btn');
    let ham_menu_line_$dom = await document.querySelectorAll('.ham-menu-line');
    await navBar_$node.classList.add('navbar');
    // display ham menu , animate ham icon
    await ham_menu_btn_$dom.addEventListener('click', () => {
        let tailwind_class_$arr = ['hidden', 'flex'];
        for (let index = 0; index <= 1; index++) {
            document.querySelector('#menu').classList.toggle(tailwind_class_$arr[index]);
            ham_menu_line_$dom[index].classList.toggle(`ham-menu-line-${index}`);
        }
    });
})();

export default navBar_$node;