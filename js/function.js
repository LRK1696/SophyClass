const userName = document.getElementById('name');
const userDireccion = document.getElementById('address');
const userPhone = document.getElementById('phone');
const userEmail = document.getElementById('email');
const userSubject = document.getElementById('subject');
const userMensaje=document.getElementById('message');

const database = firebase.database();



addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            database.ref('/users/' + userName.value).set({
                        usuario_name: userName.value,
                        usuario_direccion: userDireccion.value,
                        usuario_number: userPhone.value,
                        usuario_email: userEmail.value,
                        usuario_asunto: userSubject.value
                        usuario_message: userMensaje.value
            });
});