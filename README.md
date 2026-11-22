# 🎮 NEXUS GEAR — Boutique Gaming & E-Sport

> **Mini-projet : Développement Web côté client**  
> **Public :** TI1.x — Semestre 1 (A.U. 2026-2027)  
> **Enseignante :** Dr. Ing. Salma DAOUD

---

## 📋 Présentation du thème

**NEXUS GEAR** est un site vitrine et de commande dédié au matériel informatique gaming et E-Sport (PC Gamer sur mesure, cartes graphiques RTX, souris ultra-légères, claviers mécaniques, casques surround et écrans haute fréquence).

Le site permet aux utilisateurs de :
1. **Découvrir la boutique** (`index.html`) : présentation de l'atelier (*À propos*), catalogue des produits phares (*Nos Produits*), prestations techniques (*Nos Services*), avis clients et vidéo de présentation (*Ils parlent de nous*), ainsi qu'un espace de contact (*Contact*).
2. **Consulter les tarifs** (`carte.html`) : une carte des prix structurée sous forme de tableau regroupé par catégorie d'équipements et de services.
3. **Passer une commande personnalisée** (`command.html`) : un formulaire complet permettant de configurer une demande (coordonnées, choix des composants/périphériques, niveau RGB, couleur du setup, date et heure de retrait/livraison).

---

## 🛠️ Technologies utilisées

* **HTML5 :** Structure sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), hiérarchie stricte des titres (`<h1>` à `<h3>`), tableaux avec `rowspan`, balise `<video>` et formulaires accessibles avec `<fieldset>`, `<legend>` et `<label>`.
* **CSS3 :** Feuille de style externe unique (`style.css`), modèle de boîte (`box-sizing: border-box`), mise en page moderne avec **CSS Grid** (`repeat(auto-fit, minmax(...))`) et **Flexbox**, positionnement (`sticky`, `relative`, `absolute`, `fixed`), pseudo-classes (`:hover`, `:focus`, `:nth-child(even)`), pseudo-éléments (`::before`), transitions fluides et défilement doux (`scroll-behavior: smooth`).
* **Git & GitHub / GitLab :** Suivi de version régulier de l'avancement du projet.

---

## 📁 Arborescence du projet

```text
nexus-gear/
├── index.html          # Page d'accueil principale (À propos, Produits, Services, Avis/Vidéo, Contact)
├── carte.html          # Carte des prix et tarifs par catégorie
├── command.html        # Formulaire de commande personnalisée
├── style.css           # Feuille de style CSS3 unique partagée par toutes les pages
├── README.md           # Documentation du projet
└── images/             # Dossier contenant les visuels et la vidéo du site
    ├── hero-setup.jpg
    ├── a-propos-atelier.jpg
    ├── pc-titan-rtx.jpg
    ├── souris-viper.jpg
    ├── clavier-k95.jpg
    ├── gpu-rtx4070.jpg
    ├── casque-71.jpg
    ├── ecran-oled.jpg
    ├── video-poster.jpg
    └── presentation-setup.mp4
```

---

## 🚀 Instructions pour ouvrir et tester le site

1. **Cloner ou télécharger le dépôt :**
   ```bash
   git clone <URL_DE_VOTRE_DEPOT_GIT>
   ```
2. **Ouvrir le dossier du projet** sur votre ordinateur (par exemple avec **Visual Studio Code**).
3. **Lancer le site :**
   * Double-cliquez directement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web (Chrome, Firefox, Edge).
   * *Ou* utilisez l'extension **Live Server** dans VS Code (`Clic droit sur index.html` → `Open with Live Server`).
4. **Naviguer entre les pages** via le menu supérieur (*À propos*, *Produits*, *Services*, *Ils parlent de nous*, *Contact*, *Carte des prix* et *Commander*).

---

## 👥 Membres du groupe

* **Nom et Prénom 1 :** `[Votre Nom & Prénom]` — Groupe : `TI1.x`
* **Nom et Prénom 2 :** `[Nom & Prénom du binôme — ou supprimer cette ligne si travail individuel]` — Groupe : `TI1.x`