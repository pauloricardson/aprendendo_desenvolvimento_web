const track = document.querySelector('.carousel-track');
let slides = Array.from(document.querySelectorAll('.slide'));

const gap = 12;
let index = 1;
let slideWidth;

// ===== CLONES =====
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(document.querySelectorAll('.slide'));

function updateSizes() {
    slideWidth = slides[index].offsetWidth;
}

function moveCarousel(animate = true) {
    if (!animate) {
        track.style.transition = 'none';
    } else {
        track.style.transition = 'transform 0.5s ease';
    }

    const offset = index * (slideWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    index++;
    moveCarousel();

    if (index === slides.length - 1) {
        setTimeout(() => {
            index = 1;
            moveCarousel(false);
        }, 500);
    }
}

function prevSlide() {
    index--;
    moveCarousel();

    if (index === 0) {
        setTimeout(() => {
            index = slides.length - 2;
            moveCarousel(false);
        }, 500);
    }
}

window.addEventListener('resize', () => {
    updateSizes();
    moveCarousel(false);
});

// ===== INIT =====
updateSizes();
moveCarousel(false);

setInterval(nextSlide, 4000);
