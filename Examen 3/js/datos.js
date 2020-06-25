const db = firebase.firestore();
const id = localStorage.getItem("id");
let nm = document.getElementById("nm");
let hr = document.getElementById("hr");
let dc = document.getElementById("dc");
let cd = document.getElementById("cd");
let lg = document.getElementById("lg");
let da = document.getElementById("da");
var ref = db.collection("eventos").doc(id);
ref.get().then(function(doc) {
    //console.log("Document data: ", doc.data());
    nm.textContent = doc.data().nombre;
    dc.textContent = doc.data().descripcion;
    lg.textContent = "Lugar: " + doc.data().lugar;
    da.textContent = "Fecha: " + doc.data().fecha;
    hr.textContent = "Hora: " + doc.data().hora;
    cd.textContent = "Creditos: " + doc.data().creditos;
    console.log(doc.data().lat);
    var coordenadas = {
        lat: doc.data().lat,
        lng: doc.data().long
    }
    marcador = new google.maps.Marker({
        position: coordenadas,
        map: map5
        });
        map5.panTo(coordenadas);
});
const btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
     });
     const auth = firebase.auth();
     auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('No Logueado')
            window.location.href = "login.html"
        }
    })