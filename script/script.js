document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message, je vous répondrai rapidement !');
});


    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('nav ul');

        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    });

