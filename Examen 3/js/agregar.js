const db = firebase.firestore();
const storage = firebase.storage();

const txtNombre = document.getElementById('txtNombre');
const txtDescripcion = document.getElementById('txtDescripcion');
const txtFecha = document.getElementById('txtFecha');
const txtHora = document.getElementById('txtHora');
const txtLugar = document.getElementById('txtLugar');
const txtCreditos = document.getElementById('txtCreditos');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async (e) => {
    e.preventDefault;
    const nombre = txtNombre.value.toString();
    const descripcion = txtDescripcion.value.toString();
    const fecha = txtFecha.value.toString();
    const hora = txtHora.value.toString();
    const lugar = txtLugar.value.toString();
    const creditos = txtCreditos.value.toString();

    const response = await db.collection('eventos').doc().set({
        nombre,
        descripcion,
        fecha,
        hora,
        lugar,
        creditos
    });
    txtNombre.value='';
    txtDescripcion.value='';
    txtFecha.value='';
    txtHora.value='';
    txtCreditos.value='';
    txtLugar.value='';
    txtNombre.focus();
    console.log(response);
 });