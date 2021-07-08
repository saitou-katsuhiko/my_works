const toTopButton = document.querySelector("#js-button--toTop")
toTopButton.addEventListener('click', function(){
  scrollToTop(300);
});
window.addEventListener('scroll',toggleClass)

function toggleClass() {
    console.log('bbb');
    const position = 700 // ボタンを表示させたい位置
    let scroll = window.scrollY
    console.log(scroll)
    if (position <= scroll) {
      toTopButton.classList.add('is-active');
    } else {
      toTopButton.classList.remove('is-active');
    }
}

function scrollToTop(duration) {
    console.log('aaa');
    let currentY = window.pageYOffset;
    let step = duration/currentY > 1 ? 10 : 100;
    let timeStep = duration/currentY * step;
    let intervalId = setInterval(scrollUp, timeStep);
    
    function scrollUp() {
      currentY = window.pageYOffset;
      if(currentY === 0){
        clearInterval(intervalId);
      } else {
        scrollBy(0, -step);
      }
    }
}
