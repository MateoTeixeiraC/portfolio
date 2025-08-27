// Sélectionner tous les éléments avec la classe .scroll-fade
const elements = document.querySelectorAll('.scroll-fade');

// Créer un observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément entre dans la vue, on lui ajoute la classe "visible"
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Ne plus observer l'élément une fois qu'il est visible
        }
    });
}, {
    threshold: 0.5 // L'élément doit être à 50% dans la vue pour être visible
});

// Observer chaque élément
elements.forEach(element => {
    observer.observe(element);
});
