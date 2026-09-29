
// ハンバーガーメニュー
const wrapper = document.querySelector('.nav-wrapper')
const icon = document.querySelector('.hamburger-icon')
const overlay = document.querySelector('.overlay')
const lists = document.querySelectorAll('.nav-li')

icon.addEventListener('click', () =>{
  wrapper.classList.toggle('open')
  overlay.classList.toggle('open')
});

overlay.addEventListener('click', () =>{
  wrapper.classList.remove('open')
  overlay.classList.remove('open')
});

lists.forEach((list) => {
  list.addEventListener('click', ()=> {
    wrapper.classList.remove('open')
  })
})



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