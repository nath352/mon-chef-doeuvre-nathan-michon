console.log("Le script est chargé!");
const titre = document.querySelector('#titre-principal');
titre.addEventListener('click', () => {
    console.log("J'ai cliqué sur le titre !");
    titre.textContent = "Titre cliqué !";
  });
