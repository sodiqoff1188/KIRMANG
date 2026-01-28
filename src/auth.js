// Mock backend for authentication
const AuthService = {
  // Store users in localStorage (simulating database)
  users: JSON.parse(localStorage.getItem('users')) || [],

  // Register new user
  register: async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user already exists
        const existingUser = AuthService.users.find(
          user => user.email === userData.email
        );
        
        if (existingUser) {
          reject({ message: 'User already exists with this email' });
          return;
        }

        // Create new user
        const newUser = {
          id: Date.now(),
          ...userData,
          createdAt: new Date().toISOString()
        };

        AuthService.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(AuthService.users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        resolve({
          success: true,
          user: newUser,
          token: `fake-jwt-token-${Date.now()}`
        });
      }, 500);
    });
  },

  // Login user
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = AuthService.users.find(
          u => u.email === email && u.password === password
        );

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          resolve({
            success: true,
            user,
            token: `fake-jwt-token-${Date.now()}`
          });
        } else {
          reject({ message: 'Invalid email or password' });
        }
      }, 500);
    });
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('currentUser');
    return Promise.resolve({ success: true });
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return localStorage.getItem('currentUser') !== null;
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
};

export default AuthService;