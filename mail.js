  const firebaseConfig = {
    apiKey: "AIzaSyBNRm5w74qAudzmKCNkoMJbkr1yXt29hvc",
    authDomain: "contactform-6d28f.firebaseapp.com",
    databaseURL: "https://contactform-6d28f-default-rtdb.firebaseio.com",
    projectId: "contactform-6d28f",
    storageBucket: "contactform-6d28f.firebasestorage.app",
    messagingSenderId: "794298899338",
    appId: "1:794298899338:web:90df6b192b5b6f27d90673"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};