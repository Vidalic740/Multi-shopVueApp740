<template>
    <div class="register-layout">
      <header>
        <h1>Register</h1>
      </header>
  
      <main class="main-content">
        <div class="form-container">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                required
                @focus="animateFocus('email')"
                @blur="resetAnimation('email')"
              />
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                required
                @focus="animateFocus('password')"
                @blur="resetAnimation('password')"
              />
            </div>
  
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                required
                @focus="animateFocus('confirmPassword')"
                @blur="resetAnimation('confirmPassword')"
              />
            </div>
  
            <button type="submit" class="submit-btn">Register</button>
          </form>
        </div>
      </main>
  
      <footer>
        <p>&copy; 2025 S.A</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterLayout",
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleSubmit() {
        // Handle registration logic here (e.g., validate form, make API call)
        alert("Registration submitted!");
      },
      animateFocus(field) {
        document.getElementById(field).classList.add('focused');
      },
      resetAnimation(field) {
        document.getElementById(field).classList.remove('focused');
      }
    },
  };
  </script>
  
  <style scoped>
  .register-layout {
    font-family: 'Arial', sans-serif;
    background-color: aliceblue;
  }
  
  header {
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  footer {
    color: rgb(41, 38, 38);
    text-align: center;
    padding: 1rem;
  }
  
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
  
  .form-container {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  label {
    font-size: 14px;
    font-weight: 600;
    color: #444;
    margin-bottom: 0.5rem;
    transition: all 0.2s ease;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: #4caf50;
  }
  
  input.focused {
    border-color: #4caf50;
    transform: translateY(-5px);
  }
  
  button.submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button.submit-btn:hover {
    background-color: #45a049;
  }
  
  /* Add smooth input animation */
  input:not(.focused) {
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  
  </style>
  
  