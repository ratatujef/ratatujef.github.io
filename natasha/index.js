const btn = document.querySelector('.button');
const audio = document.querySelector('audio');
btn.addEventListener('click', (e) => {
    audio.play();
});
btn.addEventListener('touchstart', () => {
    btn.style.transform = "scale(1.2)";
});
btn.addEventListener('touchend', () => {
    btn.style.transform = "scale(1)";
});
