



// FAQ開閉
// qは自分でつける変数名
// ボタン箇所が複数
// document.querySelectorAll(".question").forEach(q => {
//   q.addEventListener("click", () => {
//     q.parentElement.classList.toggle("open");
//   });
// });

// 各リンクへ飛ぶページの開閉
document.querySelectorAll(".travel-link-button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".link__item")
    .querySelector(".link__menu")
    .classList.toggle("open")
  });
});




// ハンバーガーメニュー
const icon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.mobile-menu_list')

icon.addEventListener('click', () =>{
  menu.classList.toggle('open')
  icon.classList.toggle('open')
  overlay.classList.add('open')
});

overlay.addEventListener('click', () =>{
  menu.classList.remove('open')
  icon.classList.remove('open')
  overlay.classList.remove('open')
});

links.forEach((link)=>{
  link.addEventListener('click', ()=>{
    menu.classList.remove('open')
    icon.classList.remove('open')
    overlay.classList.remove('open')
  })
})


// おすすめツアー　タブ切り替え

// ボタンを取得
const overseasBtn = document.querySelector(".tab-overseas");
const domesticBtn = document.querySelector(".tab-domestic");

// リストを取得
const overseasList = document.querySelector(".tour-overseas");
const domesticList = document.querySelector(".tour-domestic");

// 国内ボタンをクリック
domesticBtn.addEventListener("click", () => {

    // ボタン
    overseasBtn.classList.remove("active");
    domesticBtn.classList.add("active");

    // リスト
    overseasList.classList.remove("active");
    domesticList.classList.add("active");

});

// 海外ボタンをクリック
overseasBtn.addEventListener("click", () => {

    // ボタン
    domesticBtn.classList.remove("active");
    overseasBtn.classList.add("active");

    // リスト
    domesticList.classList.remove("active");
    overseasList.classList.add("active");

});