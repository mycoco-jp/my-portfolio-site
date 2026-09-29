
// ハンバーガーメニュー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.header-menu')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.menu-list__item')


icon.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    icon.classList.toggle('open');
    overlay.classList.toggle('open');
});

overlay.addEventListener('click', ()=>{
    console.log('overlay clicked');

    menu.classList.remove('open');
    icon.classList.remove('open');
    overlay.classList.remove('open');
});

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        menu.classList.remove('open');
        icon.classList.remove('open');
        overlay.classList.remove('open');
    })
})



// ふわっと演出
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("active");

// 1回だけでOKなら
obs.unobserve(entry.target);
}
});
}, {
threshold: 0.3
});

sections.forEach(section => {
observer.observe(section);
});
