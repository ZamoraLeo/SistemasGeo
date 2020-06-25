(function() {
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const auth = firebase.auth();

      btnLogin.addEventListener('click', e => {
         const email = txtEmail.value; 
         const password = txtPassword.value;
         const promise = auth.signInWithEmailAndPassword(email, password);
         promise.catch(e=>console.log(e.message))
      });
      btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value; 
        const password = txtPassword.value;
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e=>console.log(e.message))
     });
        auth.onAuthStateChanged(firebaseUser => {
         if(firebaseUser) {
             console.log(firebaseUser);
             window.location.href = "index.html"
         } else {
             console.log('No Logueado')
         }
     })
}());
