

// ハンバーガーメニュー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.hamburger-menu')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.hamburger-menu__list')

icon.addEventListener('click', () =>{
  menu.classList.toggle('open')
  icon.classList.toggle('open')
  overlay.classList.toggle('open')
});

overlay.addEventListener('click', () =>{
  console.log('overlay clicked');
  
  menu.classList.remove('open')
  icon.classList.remove('open')
  overlay.classList.remove('open')
});

links.forEach((link) =>{
  link.addEventListener(('click'), ()=>{
    menu.classList.remove('open')
    icon.classList.remove('open')
    overlay.classList.remove('open')

  })

})


// ファーストビュースライドショー
const slides = document.querySelectorAll('.fv-image_item')
// 全ての画像をslideと定義

let current = 0;
slides[current].classList.add('active');

function nextSlide(){

  slides[current].classList.remove('active');

  current++;

  if(current >= slides.length){
      current = 0;
  }

  slides[current].classList.add('active');
}

setInterval(nextSlide, 3000);



// フェードイン
const item = document.querySelectorAll('.reasons__list')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
});

item.forEach((list) => {
  observer.observe(list);
});

// ポンっと出る
const review = document.querySelectorAll('.review__contents-list')


review.forEach((list) => {
  observer.observe(list);
});