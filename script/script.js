
//alert pour le formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérifier que les champs ne sont pas vides
    if (name && email && message) {
        alert(`Bonjour, je suis ${name}. Vous pouvez me contacter sur ${email}. Mon message est : "${message}".`);
    } else {
        alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
    }
});

//---------------------------------------------------------------------------
// Sélectionne le bouton de basculement et le body
//bouton dark

   
const toggleButton = document.querySelector('.toggle-btn');
const body = document.body;

// Fonction pour basculer entre le mode clair et sombre
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Met à jour le texte et les classes du bouton
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode ☀️';
        toggleButton.classList.remove('light-mode');
        toggleButton.classList.add('dark-mode');
    } else {
        toggleButton.textContent = 'Dark Mode 🌙';
        toggleButton.classList.remove('dark-mode');
        toggleButton.classList.add('light-mode');
    }
});


// Gestion du menu hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ajoute ou retire la classe active
});
