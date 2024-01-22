document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
        const container = e.target.closest('.container-beforeAfter');
        if (container) {
            container.style.setProperty('--position', `${e.target.value}%`);
        }
    });
});