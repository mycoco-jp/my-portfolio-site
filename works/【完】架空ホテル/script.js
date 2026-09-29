

const wrapper = document.querySelector('.hamburger-wrapper')
const menu = document.querySelector('.global-nav')
const icon = document.querySelector('.hamburger-icon')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.nav-li')

icon.addEventListener('click', () =>{
  menu.classList.toggle('open')
  wrapper.classList.toggle('open')
  overlay.classList.toggle('open')
});

overlay.addEventListener('click', () =>{
    menu.classList.remove('open')
    wrapper.classList.remove('open')
    overlay.classList.remove('open')
})

links.forEach((link)=>{
    link.addEventListener(('click'), ()=>{
        menu.classList.remove('open')
        wrapper.classList.remove('open')
        overlay.classList.remove('open')
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


// 写真カルーセル
const carousel = document.querySelector(".carousel-list");

// 元の画像をコピー
// 写真を無限ループさせるためのお決まりの準備
carousel.innerHTML += carousel.innerHTML;

let position = 0;
let animationId;
let isPaused = false;

// 画像1枚分の横幅（画像幅＋gap）
const itemWidth = 166;

// 動かす処理
function animate() {
    if (!isPaused) {
        position += 1;

        if (position >= carousel.scrollWidth / 2) {
            position = 0;
        }

        carousel.style.transform = `translateX(-${position}px)`;
    }

    animationId = requestAnimationFrame(animate);
}

// スタート
animate();

// // ホバーで停止
// carousel.addEventListener("mouseenter", () => {
//     isPaused = true;
// });

// // ホバー解除で再開
// carousel.addEventListener("mouseleave", () => {
//     isPaused = false;
// });