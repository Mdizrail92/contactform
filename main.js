 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDY93tanqQhfiHnJgnLhqvbyupm9j1Tc5E",
    authDomain: "contactform-a2ef2.firebaseapp.com",
    projectId: "contactform-a2ef2",
    storageBucket: "contactform-a2ef2.appspot.com",
    messagingSenderId: "794044009362",
    appId: "1:794044009362:web:3f8fc9a8f7a739be5acf4b",
    measurementId: "G-KDZ8YNV500"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //get Value
    var name = getInput('name');
    var company = getInput('company');
    var email = getInput('email');
    var phone = getInput('phone');
    var message = getInput('message');

    //save message
    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';
    
    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);

    //Clear form
    document.getElementById('contactForm').reset();
}

//function to get form values
function getInput(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message

    });
}