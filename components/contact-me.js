const socialMedia = [
    { name:'instagram', link: 'https://www.instagram.com/___erfan_gh___/' },
    { name:'telegram', link: 'https://t.me/ERFAN_web_dev' },
    { name:'github', link: 'https://github.com/erfanGharib' },
    { name:'linkedin', link: 'https://www.linkedin.com/in/erfan-gharib-40b80b207/' },
    { name:'email', link: 'www.gmail.com' },
];
let elements='';
export default function contact_me_$func() {
    socialMedia.forEach(value => {
        elements += (
            `<a class="contact-me-boxes hover:shadow-3xsm" href="${value.link}">
                <i class="w-10 h-10 block ico-${value.name}"></i>
                <span class="text-xl capitalize text-light-gray mx-auto">${value.name}</span>
            </a>`
        )
    })
    return `<div class="px-7 h-full w-full">
        <div class="contact-me-grid h-full">${elements}</div>
    </div>`;
}