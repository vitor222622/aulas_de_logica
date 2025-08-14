// Alternância de tema
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    html.className = theme;
    localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
});

// Alternância de visibilidade da senha
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    if (type === 'text') {
        togglePassword.textContent = '🙈';
    } else {
        togglePassword.textContent = '👁️';
    }
});

// Validação de força da senha
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strengthMeter = document.getElementById('passwordStrength');
    const feedback = document.getElementById('passwordFeedback');
    
    let strength = 0;
    let messages = [];

    // Verificar comprimento
    if (password.length >= 8) strength += 1;
    else messages.push('Mínimo 8 caracteres');

    // Verificar letras maiúsculas
    if (/[A-Z]/.test(password)) strength += 1;
    else messages.push('Adicione letras maiúsculas');

    // Verificar números
    if (/[0-9]/.test(password)) strength += 1;
    else messages.push('Adicione números');

    // Verificar caracteres especiais
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    else messages.push('Adicione caracteres especiais');

    // Atualizar medidor de força
    const width = strength * 25;
    strengthMeter.style.width = `${width}%`;

    // Atualizar cor e feedback
    if (width === 0) {
        strengthMeter.style.backgroundColor = 'transparent';
    } else if (width <= 25) {
        strengthMeter.style.backgroundColor = '#d64045'; // Vermelho escuro
        feedback.textContent = 'Senha fraca';
        feedback.className = 'text-xs mt-1 h-4 text-red-600';
    } else if (width <= 50) {
        strengthMeter.style.backgroundColor = '#ff9f1c'; // Laranja
        feedback.textContent = 'Senha moderada';
        feedback.className = 'text-xs mt-1 h-4 text-amber-600';
    } else if (width <= 75) {
        strengthMeter.style.backgroundColor = '#4361ee'; // Azul profundo
        feedback.textContent = 'Senha boa';
        feedback.className = 'text-xs mt-1 h-4 text-blue-600';
    } else {
        strengthMeter.style.backgroundColor = '#4cc9f0'; // Ciano
        feedback.textContent = 'Senha forte';
        feedback.className = 'text-xs mt-1 h-4 text-cyan-600';
    }
});

// Validação do formulário
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação básica
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido');
        return;
    }

    if (password.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres');
        return;
    }

    // Aqui você pode adicionar a lógica de autenticação real
    alert(`Login bem-sucedido!\nEmail: ${email}`);
});