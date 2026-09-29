
// ハンバーガーメニュー
const wrapper = document.querySelector('.nav-wrapper')
const icon = document.querySelector('.hamburger-icon')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.nav-li')

icon.addEventListener('click', () =>{
  wrapper.classList.toggle('open')
  overlay.classList.toggle('open')
});

overlay.addEventListener('click', ()=>{
  wrapper.classList.remove('open')
  overlay.classList.remove('open')
})

links.forEach((link) =>{
  link.addEventListener('click', ()=>{
    wrapper.classList.remove('open')
    overlay.classList.remove('open')
  })
})

// FAQアコーディオン
const buttons = document.querySelectorAll('.faq-question')

buttons.forEach((button) => {
  button.addEventListener("click", () => {
       //（全部閉じる）
       document.querySelectorAll('.faq-answer').forEach((answer) => {
        answer.classList.remove("open");
      });

    const answer = button.parentElement.nextElementSibling;
    answer.classList.toggle("open");
  })
})


// ふわっと演出
const targets = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("active");

// 1回だけでOKなら
obs.unobserve(entry.target);
}
});
}, {
threshold: 0.4
});

targets.forEach(target => {
observer.observe(target);
});