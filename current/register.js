function configurarFormularioRegistro() {
    function showError(mensaje) {
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
    }

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        if (!username || !email || !password || !confirmPassword) {
            showError("Complete all the fiels");
            return;
        }

        if (password !== confirmPassword) {
            showError("The passwords doesnt are the same");
            return;
        }

        if (password.length < 6) {
            showError("The password have to have 6 character min lengh");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('users')) || [];
        
        if (usuarios.find(u => u.username === username)) {
            showError("This usermane already exist");
            return;
        }

        if (usuarios.find(u => u.email === email)) {
            showError("This email already exist");
            return;
        }

        const NewUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password,
            cart: [],
            orders: [],
            createdAt: new Date().toISOString()
        };

        usuarios.push(NewUser);
        localStorage.setItem('users', JSON.stringify(usuarios));

        mostrarExito("¡Cuenta creada exitosamente! Redirigiendo al inicio de sesión...");
        
        setTimeout(() => {
            location.reload();
        }, 2000);
    });
}

console.log('users')