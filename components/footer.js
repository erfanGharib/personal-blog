function footer_$func() {
	return (
		`<div class="w-full flex flex-wrap justify-between py-2 px-5 items-center text-sm border-l border-r border-darkGray">
			<span>Desined and Developed by Erfan Gharib</span>
			<span>All Rights Reserved &copy;</span>
			<div id="google_translate_element"></div>
		</div>`
	);
};

const footer_$node = document.createElement('nav');
(async () => {
	footer_$node.innerHTML = await footer_$func();
	await footer_$node.classList.add('border-darkGray', 'border-t', 'w-full', 'mt-auto', 'px-7');
})();

export default footer_$node;