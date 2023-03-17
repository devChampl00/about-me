const homeLink = document.getElementById('home-link'),
    aboutLink = document.getElementById('about-link'),
    galleryLink = document.getElementById('gallery-link'),
    contactLink = document.getElementById('contact-link');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 725 && window.pageYOffset < 1405) {
        aboutLink.classList.add('active');
        homeLink.classList.remove('active');
        galleryLink.classList.remove('active');
        contactLink.classList.remove('active');
    } else if (window.pageYOffset > 1404 && window.pageYOffset < 2591) {
        galleryLink.classList.add('active');
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
    } else if (window.pageYOffset > 2590) {
        contactLink.classList.add('active');
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        galleryLink.classList.remove('active');
    } else {
        homeLink.classList.add('active');
        aboutLink.classList.remove('active');
        galleryLink.classList.remove('active');
        contactLink.classList.remove('active');
    }
}); // ajarin cara yg lebih mudah cok wkwk

const scriptURL = 'https://script.google.com/macros/s/AKfycbzt54iJ4fwGDJEbR2ds7jIIXrlaaenojLz2-S-4sy1SGe5bv0LNviy_CYrV6Whw57k/exec';
const form = document.forms['lezipipell-contact-form'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => console.log('Success!', response))
        .catch((error) => console.error('Error!', error.message));
});
