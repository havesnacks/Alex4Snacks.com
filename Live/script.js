document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.header');
    heading.textContent = 'Alex4Snacks';
});

function navigate(location = '') {
    if (location === 'home') {
        window.location.href = "home.html";
    } else if (location === 'blog') {
        window.location.href = "blog.html";
    } else if (location === 'gallery') {
        window.location.href = "gallery.html";
    }
}
