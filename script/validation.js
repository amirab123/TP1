  // Récupérer les valeurs des champs du formulaire
const formulaire = document.getElementById("contactForm");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const msg = document.getElementById("message");




  formulaire.addEventListener("submit", (e) => {
 
    e.preventDefault();
    if (validateInputs()) { 
      formulaire.submit(); 
  }

  });
    const   validateInputs =() =>

      {
          let noError =true;
          const nomValue = nom.value.trim();
          const prenomValue = prenom.value.trim();
          const emailValue = email.value.trim(); 
          const messageValue = msg.value.trim(); 
        
      
          if (nomValue === "") {
              setError(nom, 'nom  est requis ');
            
              noError=false; // Arrête l'envoi du formulaire
          } 
      
          else if (isNameTooLong(nomValue)) {
              setError(nom, 'Le nom est trop long !');
              noError = false; // Arrête l'envoi du formulaire
          }
          else {
              setSuccess(nom);
          }
          if (prenomValue === "") {
            setError(prenom, 'prenom est requis ');
            noError=false;
        } 
    
        else if (isLastnameTooLong(prenomValue)) {
            setError(prenom, 'Le prenom est trop long !');
            noError = false;
        }
        else {
            setSuccess(prenom);
        }
         // Vérifier si le champ "email" est vide
            if (emailValue === "") {
              setError(email, " L'email est requis  !");
              console.log(email);
              noError = false; // Arrête l'envoi du formulaire
            }
            else if (!isValidEmail(emailValue)) {
              setError(email, 'Adresse email incorrecte. Veuillez réessayer');
              console.log(email);
              console.log('Adresse email incorrecte. Veuillez réessayer');
          }
            else {
              setSuccess(email);
      
          }
            if (messageValue === "") {
              setError(msg, "message est requis  !");// Message d'erreur si vide
              noError=false;
            }
      
            else if (isMessageTooLong(messageValue)) {
              setError(msg, 'Message est trop long !');// Message d'erreur si vide
              noError = false;
          }
          else {
              setSuccess(msg);
          }

      }
      
      
          const setError = (element, message) => {
              const inputControl = element.parentElement;
              const errorDisplay = inputControl.querySelector('.errormessage');
          
              errorDisplay.innerText = message;
              inputControl.classList.add('error');
              inputControl.classList.remove('success');
          }
      
          const setSuccess = element => {
              const inputControl = element.parentElement;
              const errorDisplay = inputControl.querySelector('.errormessage');
          
              errorDisplay.innerText = '';
              inputControl.classList.add('success');
              inputControl.classList.remove('error');
          };


  

  //  fonction Vérifier le format de l'adresse e-mail avec une expression régulière
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isNameTooLong = nom => {

  return nom.length >= 100;
};
const isLastnameTooLong = prenom => {

  return prenom.length >= 100;
};
const isMessageTooLong = message => {

  return message.length >= 1000;
};


   // Accessibilité : activer le menu

const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');


 




  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');




  });
  



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const errorMessage = document.getElementById('search-error');

  function verifierRecherche() {
    const recherche = input.value.trim().toLowerCase();

    if (!recherche) {
      errorMessage.textContent = "Veuillez entrer un mot";
      errorMessage.style.color = "red";


      errorMessage.tabIndex = 0;
      errorMessage.focus();

      return false;
    }

    const textePage = document.body.textContent.toLowerCase();

    if (textePage.includes(recherche)) {
      errorMessage.textContent = `Le mot "${recherche}" a été trouvé dans la page `;
      errorMessage.style.color = "green";

      errorMessage.tabIndex = 0;
      errorMessage.focus();

      return true;
    } else {
      errorMessage.textContent = `Aucun résultat pour "${recherche}".`;
      errorMessage.style.color = "red";

      errorMessage.tabIndex = 0;
      errorMessage.focus();

      return false;
    }
  }

  // Événement keyup pour recherche en temps réel
  input.addEventListener('keyup', verifierRecherche);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (verifierRecherche()) {
      console.log('Recherche valide');
    }
  });
});


  document.querySelectorAll('.arrow').forEach((arrow) => {
    arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); 
        arrow.click(); // simule un clic
      }
    });
  });
//logo 
  const logo = document.querySelector('.logo-s');
logo.addEventListener('click', () => {
  logo.classList.toggle('active');
});