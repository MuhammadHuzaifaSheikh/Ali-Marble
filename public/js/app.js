var userName = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');

var button = document.getElementById('saveBtn');


var db = firebase.firestore();

function save() {
    var data = {
        userName: userName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    };
    db.collection("marble-message").add(data)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    userName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';


}