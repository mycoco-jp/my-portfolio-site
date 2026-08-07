
// ハンバーガーメニュー
const wrapper = document.querySelector('.nav-wrapper')
const icon = document.querySelector('.hamburger-icon')

icon.addEventListener('click', () =>{
  wrapper.classList.toggle('open')
});


// ふわっとセクション
const fadeUps = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

fadeUps.forEach(item => {
  observer.observe(item);
});