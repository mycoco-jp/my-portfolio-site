
// const button = document.getElementById("myButton");
// // クリックしたら文字色を赤にする
// button.addEventListener("click", function() {
//   const text = document.getElementById("myText");
//   text.style.color = "blue";
// });



// ハンバーガーメニュー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.hamburger-menu')
const overlay = document.querySelector('.overlay')

icon.addEventListener('click', () =>{
  menu.classList.toggle('open')
  icon.classList.toggle('open')
  overlay.classList.toggle('open')
});

overlay.addEventListener('click', () =>{
  menu.classList.remove('open')
  icon.classList.remove('open')
  overlay.classList.remove('open')
});




