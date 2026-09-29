// ハンバーガー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.header-menu')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.header-menu__list')

icon.addEventListener('click', ()=>{
  menu.classList.toggle('open')
  icon.classList.toggle('open')
  overlay.classList.add('open')
});

overlay.addEventListener('click', ()=>{
  menu.classList.remove('open')
  icon.classList.remove('open')
  overlay.classList.remove('open')
})

links.forEach((link) =>{
  link.addEventListener('click', ()=>{
    menu.classList.remove('open')
    icon.classList.remove('open')
    overlay.classList.remove('open')
  })
})


// FAQアコーディオン
const items = document.querySelectorAll('.faq-items') 

items.forEach(item => {
  item.addEventListener('click',() =>{

    const answer = item.nextElementSibling;

    answer.classList.toggle('active');


  });
});


