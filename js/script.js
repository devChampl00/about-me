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
const input = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    message: document.querySelector('#message'),
};
let nameValidation = null;
let emailValidation = null;
let messageValidation = null;
const button = document.querySelector('#button');
const alert = document.querySelector('#alert');
const alertFailed = document.querySelector('#alert-danger');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!input.name.value.length) {
        nameValidation = 'Fullname is required';
    } else if (input.name.value.length < 5) {
        nameValidation = 'Fullname should not less then 5 chars';
    } else if (input.name.value.length > 50) {
        nameValidation = 'Fullname should not more then 50 chars';
    } else {
        nameValidation = null;
    }
    if (nameValidation) {
        input.name.classList.add('is-invalid');
        document.querySelector('#name-validation').innerHTML = nameValidation;
    } else {
        input.name.classList.remove('is-invalid');
    }

    if (!input.email.value.length) {
        emailValidation = 'Email is required';
    } else {
        emailValidation = null;
    }
    if (emailValidation) {
        input.email.classList.add('is-invalid');
        document.querySelector('#email-validation').innerHTML = emailValidation;
    } else {
        input.email.classList.remove('is-invalid');
    }

    if (!input.message.value.length) {
        messageValidation = 'Message is required';
    } else if (input.message.value.length < 10) {
        messageValidation = 'Message should not less then 10 chars';
    } else if (input.message.value.length > 500) {
        messageValidation = 'Message should not more then 500 chars';
    } else {
        messageValidation = null;
    }
    if (messageValidation) {
        input.message.classList.add('is-invalid');
        document.querySelector('#message-validation').innerHTML = messageValidation;
    } else {
        input.message.classList.remove('is-invalid');
    }

    if (nameValidation || emailValidation || messageValidation) {
        return;
    } else {
        button.innerHTML = 'Loading...';
        button.setAttribute('disabled', '');

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then((response) => {
                console.log(response);

                alert.classList.add('show');
                alert.classList.remove('d-none');
                button.innerHTML = 'Submit';
                button.removeAttribute('disabled');
                form.reset();
            })
            .catch((error) => {
                console.error('Error!', error.message);

                alertFailed.classList.add('show');
                alertFailed.classList.remove('d-none');
                button.innerHTML = 'Submit';
                button.removeAttribute('disabled');
            });
    }
});
