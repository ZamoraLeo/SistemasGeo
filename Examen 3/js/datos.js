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
    var coordenadas = { lat: 21.152639, lng:  -101.711598 };
            var propiedades = {
                center: coordenadas,
                zoom: 12
            };
    var map5 = new google.maps.Map(document.getElementById('mapa'),propiedades);
    nm.textContent = doc.data().nombre;
    dc.textContent = doc.data().descripcion;
    lg.textContent = "Lugar: " + doc.data().lugar;
    da.textContent = "Fecha: " + doc.data().fecha;
    hr.textContent = "Hora: " + doc.data().hora;
    cd.textContent = "Creditos: pipi" + doc.data().creditos;
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