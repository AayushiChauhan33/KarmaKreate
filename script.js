// Add a script to adjust the background image animation speed based on screen size
const background = document.querySelector('.background');
const images = background.querySelectorAll('img');

function adjustAnimationSpeed() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        images.forEach((image) => {
            image.style.animationDuration = '20s';
        });
    } else if (screenWidth < 480) {
        images.forEach((image) => {
            image.style.animationDuration = '15s';
        });
    } else {
        images.forEach((image) => {
            image.style.animationDuration = '30s';
        });
    }
}

window.addEventListener('resize', adjustAnimationSpeed);
adjustAnimationSpeed();