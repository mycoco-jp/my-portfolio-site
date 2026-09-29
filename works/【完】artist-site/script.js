

// モーダル

const workImages = document.querySelectorAll(".work-img");
const modal = document.querySelector(".modal");

const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalDate = document.querySelector(".modal-date");
const modalMaterial = document.querySelector(".modal-material");
const modalDesc = document.querySelector(".modal-desc");

workImages.forEach(img => {
  img.addEventListener("click", () => {

    modalImg.src = img.src;
    modalImg.alt = img.alt;

    modalTitle.textContent = img.dataset.title;
    modalDate.textContent = img.dataset.date;
    modalMaterial.textContent = img.dataset.material;
    modalDesc.textContent = img.dataset.desc;

    modal.classList.add("active");
  });
});

// ハンバーガー
const icon = document.querySelector('.hamburger-icon')
const lines = document.querySelectorAll('.hamburger-line')
const menu = document.querySelector('.hamburger-menu')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.hamburger-li')

icon.addEventListener('click', ()=>{
  icon.classList.toggle('open')
  lines.forEach((line) => {
    line.classList.toggle('open')
  })

  menu.classList.toggle('open')
  overlay.classList.add('open')

})

overlay.addEventListener(('click'), ()=>{

  menu.classList.remove('open')
  overlay.classList.remove('open')
  icon.classList.remove('open')

})

links.forEach((link) =>{
  link.addEventListener(('click'), ()=>{
      menu.classList.remove('open') 
      icon.classList.remove('open') 
      overlay.classList.remove('open')

  })

  lines.forEach((line) => {
    line.classList.remove('open')
  })
})



// バツで閉じる
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});
const modalContent = document.querySelector(".modal-content");

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});