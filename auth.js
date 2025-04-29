// Enhanced Authentication System
const auth = (() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const register = (username, password) => {
        if(users.some(u => u.username === username)) {
            throw new Error('Username already exists');
        }
        
        const newUser = {
            username,
            password, // In production, use proper password hashing
            createdAt: new Date().toISOString(),
            lastLogin: null
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return newUser;
    };

    const login = (username, password) => {
        const user = users.find(u => 
            u.username === username && 
            u.password === password
        );
        
        if(!user) {
            throw new Error('Invalid credentials');
        }
        
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        return user;
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
    };

    const getCurrentUser = () => currentUser;

    return {
        register,
        login,
        logout,
        getCurrentUser
    };
})();

// Event Listeners
document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('authUsername').value;
    const password = document.getElementById('authPassword').value;
    const isLogin = document.getElementById('modalTitle').textContent === 'Login';

    try {
        if(isLogin) {
            auth.login(username, password);
            alert('Login successful!');
        } else {
            auth.register(username, password);
            alert('Registration successful!');
        }
        location.reload();
    } catch(error) {
        alert(error.message);
    }
});
