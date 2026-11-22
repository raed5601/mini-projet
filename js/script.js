// =========================================================
// VALIDATION & RÉCAPITULATIF DES FORMULAIRES (NEXUS GEAR)
// =========================================================

// 1. Formulaire de commande détaillé (sur command.html)
const formCommande = document.querySelector(".formulaire-detaille");
const encartStatut = document.querySelector(".encart-statut");

if (formCommande && encartStatut) {
  formCommande.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des champs obligatoires principaux
    const nom = document.querySelector("#nom").value.trim();
    const prenom = document.querySelector("#prenom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telephone = document.querySelector("#telephone").value.trim();
    const adresse = document.querySelector("#adresse").value.trim();
    const gouvernorat = document.querySelector("#gouvernorat").value;
    const quantite = document.querySelector("#quantite").value;

    // Vérification simple des champs obligatoires
    if (!nom || !prenom || !email || !telephone || !adresse) {
      afficherStatut(
        "Erreur : veuillez remplir tous les champs obligatoires (Nom, Prénom, Email, Téléphone, Adresse).",
        true
      );
      return;
    }

    // Vérification du format de l'e-mail
    if (!email.includes("@") || !email.includes(".")) {
      afficherStatut(
        "Erreur : veuillez entrer une adresse e-mail valide (ex: nom@exemple.tn).",
        true
      );
      return;
    }

    // Récupération des cases cochées (articles / options)
    const coches = document.querySelectorAll('input[name="articles"]:checked');
    const listeArticles = [];
    coches.forEach(function (caseCochee) {
      listeArticles.push(caseCochee.parentElement.textContent.trim());
    });

    const texteArticles =
      listeArticles.length > 0 ? listeArticles.join(", ") : "Aucun article coché";

    // Affichage du récapitulatif et du statut dans .encart-statut
    afficherStatut(
      "Commande prête ! Client : " +
        prenom +
        " " +
        nom +
        " (" +
        gouvernorat +
        ") | Quantité : " +
        quantite +
        " | Sélection : " +
        texteArticles +
        ".",
      false
    );
  });

  // Réinitialisation propre quand on clique sur "Tout effacer"
  formCommande.addEventListener("reset", function () {
    afficherStatut(
      "Formulaire effacé. Le statut de la commande s'affichera ici après validation.",
      false
    );
  });
}

// 2. Formulaire de contact rapide (sur index.html)
const formContact = document.querySelector(".formulaire-contact");

if (formContact) {
  formContact.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomContact = document.querySelector("#contact-nom").value.trim();
    const emailContact = document.querySelector("#contact-email").value.trim();
    const messageContact = document.querySelector("#contact-message").value.trim();

    if (!nomContact || !emailContact || !messageContact) {
      alert("Merci de remplir votre nom, votre e-mail et votre message.");
      return;
    }

    if (!emailContact.includes("@") || !emailContact.includes(".")) {
      alert("Merci d'entrer une adresse e-mail valide.");
      return;
    }

    alert("Merci " + nomContact + ", votre message a bien été vérifié !");
    formContact.reset();
  });
}

// Fonction utilitaire pour mettre à jour le message dans .encart-statut
function afficherStatut(texte, estErreur) {
  encartStatut.innerHTML =
    "<h3>" +
    (estErreur ? "Vérification requise" : "Récapitulatif & Statut") +
    "</h3><p>" +
    texte +
    "</p>";

  encartStatut.style.borderLeftColor = estErreur ? "#ff2a85" : "#00f0ff";
}