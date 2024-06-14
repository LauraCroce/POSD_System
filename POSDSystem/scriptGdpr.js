
// Pulsante "Torna all'Inizio"
document.querySelector('.back-to-top').addEventListener('click', function() {
    // Quando il pulsante "Torna all'Inizio" viene cliccato, scorri la pagina verso l'alto con un effetto di smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// JavaScript per gestire l'espansione/collasso delle sezioni
function toggleSection(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

