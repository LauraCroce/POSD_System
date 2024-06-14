// Effetto di Hover sulle Immagini del Team
document.querySelectorAll('.team-member img').forEach(img => {
    img.addEventListener('mouseover', function() {
        // Quando il mouse passa sopra all'immagine del membro del team, applica una trasformazione di scala per ingrandire l'immagine
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseout', function() {
        // Quando il mouse esce dall'immagine del membro del team, riporta l'immagine alla sua dimensione normale
        this.style.transform = 'scale(1)';
    });
});

// Pulsante "Torna all'Inizio"
document.querySelector('.back-to-top').addEventListener('click', function() {
    // Quando il pulsante "Torna all'Inizio" viene cliccato, scorri la pagina verso l'alto con un effetto di smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Aggiungi evento di click dinamico ai membri del team
document.addEventListener('DOMContentLoaded', function() {
    var teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(function(member) {
        // Per ogni membro del team, aggiungi un evento di click dinamico che apre la finestra modale con i dettagli del membro
        member.addEventListener('click', function() {
            // Recupera le informazioni del membro del team dal dataset HTML e apri la finestra modale con queste informazioni
            var nome = member.dataset.nome;
            var cognome = member.dataset.cognome;
            var matricola = member.dataset.matricola;
            var corsoDiStudi = member.dataset.corsoDiStudi;
            var email = member.dataset.email;
            openModal(firstName, lastName, role, id, email);
        });
    });
});

// Array contenente le informazioni sui membri del team
var teamMembersData = [
    { nome: "Laura", cognome: "Croce", matricola: "717847", corsoDiStudi: "ITPS corso A", email: "l.croce2@studenti.uniba.it", image: "team-member1.jpg" },
    { nome: "Eugenio Nicola", cognome: "Verrascina", matricola: "590146", corsoDiStudi: "ITPS corso B", email: "e.verrascina@studenti.uniba.it", image: "team-member2.jpg" }
    // Aggiungi altri membri del team qui
];

// Funzione per generare dinamicamente gli elementi HTML dei membri del team
function renderTeamMembers() {
    var teamContainer = document.getElementById("teamContainer");

    teamMembersData.forEach(function(member) {
        // Per ogni membro del team, crea un elemento HTML e aggiungilo al contenitore del team
        var memberElement = document.createElement("div");
        memberElement.classList.add("team-member");
        memberElement.innerHTML = `
            <img src="${member.image}" alt="Membro del Team">
            <h3>${member.nome} ${member.cognome}</h3>
        `;
        // Aggiungi un evento di click per aprire la finestra modale con i dettagli del membro
        memberElement.addEventListener("click", function() {
            openModal(member);
        });
        teamContainer.appendChild(memberElement);
    });
}

// Funzione per aprire la finestra modale e mostrare i dettagli del team
function openModal(member) {
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");

    // Genera il contenuto della finestra modale utilizzando le informazioni del membro del team
    var modalHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${member.nome} ${member.cognome}</h2>
        <p>Matricola: ${member.matricola}</p>
        <p>Corso Di Studi: ${member.corsoDiStudi}</p>
        <p>Email: ${member.email}</p>
    `;

    // Aggiorna il contenuto della finestra modale e visualizzala
    modalContent.innerHTML = modalHTML;
    modal.style.display = "block";
}

// Funzione per chiudere la finestra modale
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Chiudere la finestra modale cliccando al di fuori del contenuto
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Caricamento iniziale della pagina: genera dinamicamente gli elementi HTML dei membri del team
document.addEventListener("DOMContentLoaded", function() {
    renderTeamMembers();
});
