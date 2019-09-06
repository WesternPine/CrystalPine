const carousel = document.querySelector('#carouselSlide');
const carouselPages = document.querySelectorAll('.page');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = carouselPages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click',()=>{
  if(counter >= carouselPages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
  if(carouselPages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselPages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselPages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselPages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});