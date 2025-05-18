
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
            
              noError=false;
          } 
      
          else if (isNameTooLong(nomValue)) {
              setError(nom, 'Le nom est trop long !');
              noError = false;
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
            if (emailValue === "") {
              setError(email, " L'email est requis  !");
              console.log(email);
              noError = false;
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
              setError(msg, "message est requis  !");
              noError=false;
            }
      
            else if (isMessageTooLong(messageValue)) {
              setError(msg, 'Message est trop long !');
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

const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");

   
    const isExpanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !isExpanded);
  });

   // Accessibilité : activer le menu chart 

document.querySelector('.circle').setAttribute('stroke-dasharray', '75, 100'); // 50%
document.querySelector('.percentage').textContent = '75%';