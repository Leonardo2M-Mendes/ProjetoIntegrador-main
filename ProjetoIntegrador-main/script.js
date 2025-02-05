
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
    const itemWidth = document.querySelector('.carousel-item').clientWidth;
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < carousel.children.length - 1) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});
