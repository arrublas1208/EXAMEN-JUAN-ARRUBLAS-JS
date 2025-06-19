if (localStorage.getItem('currentUser')) {
    goToStore();
}

function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function mostrarExito(mensaje) {
    const successDiv = document.getElementById('success-message');
    successDiv.textContent = mensaje;
    successDiv.style.display = 'block';
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}

function iniciarSesion() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        mostrarError("Todos los campos son obligatorios");
        return false;
    }

    const usuarios = JSON.parse(localStorage.getItem('users')) || [];
    
    const usuario = usuarios.find(u => 
        (u.username === username || u.email === username) && u.password === password
    );

    if (!usuario) {
        mostrarError("Usuario o contraseña incorrectos");
        return false;
    }

    localStorage.setItem('currentUser', JSON.stringify(usuario));
    mostrarExito("¡Bienvenido " + usuario.username + "!");
    

    setTimeout(() => {
        Gotohome();
    }, 1300);
    
    return true;
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    iniciarSesion();
});
function goToRegister() {
window.location.href = "register.html"
}

 function Gotohome() {    
window.loctaion.href = "home.html"
 }