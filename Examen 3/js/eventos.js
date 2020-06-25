const db = firebase.firestore();
const productoslista = document.querySelector("#lista");
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
db.collection('eventos').onSnapshot( snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach( change => {
        if(change.type == 'added'){
            renderProductos(change.doc);
        } else if(change.type=='removed'){
            console.log(change.doc.id);
            let valorid = document.getElementById(change.doc.id);
            lista.removeChild(valorid);
        }
    });
});
function renderProductos(doc){
 
                
    let li = document.createElement("li");
    let nombre = document.createElement("span");
    let descripcion = document.createElement("span");
    let lugar = document.createElement("span");
    let hora = document.createElement("span");
    let creditos = document.createElement("span");
    let borrar = document.createElement("button");

    borrar.className = "glow-on-hover";

    nombre.textContent = doc.data().nombre;
    descripcion.textContent = doc.data().descripcion;
    lugar.textContent = doc.data().lugar;
    hora.textContent = doc.data().hora;
    creditos.textContent = "Creditos: " + doc.data().creditos;
    borrar.textContent = "Borrar";

    li.setAttribute("id", doc.id);
    li.appendChild(borrar);
    li.appendChild(nombre);
    li.appendChild(descripcion);
    li.appendChild(lugar);
    li.appendChild(creditos);

    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        db.collection("eventos").doc(id).delete();
    });
    li.addEventListener("click", (e)=>{
        let id = e.target.parentElement.getAttribute("id");
        localStorage.setItem("id", id);
        window.location.href = "datos.html"
    });
}
