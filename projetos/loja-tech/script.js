const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dots = document.querySelectorAll('.dot');

let index = 1;
let slideWidth;
let interval;

/* Clona primeiro e último slide */
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll('.slide');

function setPosition() {
    slideWidth = allSlides[0].offsetWidth + 12; // 12 = gap
    track.style.transform = `translateX(${-slideWidth * index}px)`;
}

window.addEventListener('resize', setPosition);
setPosition();

function moveToNext() {
    if (index >= allSlides.length - 1) return;
    index++;
    track.style.transition = 'transform 0.5s ease';
    setPosition();
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[(index - 1 + dots.length) % dots.length].classList.add('active');
}

track.addEventListener('transitionend', () => {
    if (allSlides[index] === firstClone) {
        track.style.transition = 'none';
        index = 1;
        setPosition();
    }

    if (allSlides[index] === lastClone) {
        track.style.transition = 'none';
        index = allSlides.length - 2;
        setPosition();
    }
});

/* Autoplay */
function startAutoPlay() {
    interval = setInterval(moveToNext, 3000);
}

startAutoPlay();