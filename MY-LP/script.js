
// ハンバーガーメニュー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.header-menu')

icon.addEventListener('click', ()=>{
    menu.classList.toggle('open')
    icon.classList.toggle('open')
});



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
