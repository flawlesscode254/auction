document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();

    
});


function Login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        console.log(user);
        document.getElementById("two").innerHTML = user.displayName;
    })
    .catch(console.log);
};

