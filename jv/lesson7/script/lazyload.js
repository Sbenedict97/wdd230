const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);

            img.onload = () => {
                img.style.opacity = 1;
            };

            observer.unobserve(entry.target);
        }
    });
});

const images = document.querySelectorAll('img[data-src]');
images.forEach((image) => {
    observer.observe(image);
});
