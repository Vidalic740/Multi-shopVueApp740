<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
  
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              :class="{'input-error': emailError}"
              @input="clearEmailError"
              autofocus
            />
          </div>
  
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              :class="{'input-error': passwordError}"
            />
          </div>
  
          <button type="submit" class="submit-btn">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        emailError: false,
        passwordError: false,
      };
    },
    methods: {
      submitForm() {
        this.clearErrors();
        if (!this.validateForm()) return;
        // Handle form submission here, e.g., send login request
        console.log("Form submitted:", this.email, this.password);
      },
      validateForm() {
        let isValid = true;
  
        if (!this.email) {
          this.emailError = true;
          isValid = false;
        }
  
        if (!this.password) {
          this.passwordError = true;
          isValid = false;
        }
  
        return isValid;
      },
      clearErrors() {
        this.emailError = false;
        this.passwordError = false;
      },
      clearEmailError() {
        if (this.email) {
          this.emailError = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-box {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 26px;
    color: black;
  }
  
  .input-group {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: grey;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #302c2c;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: #5c6bc0;
  }
  
  input.input-error {
    border-color: red;
  }
  
  button.submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #9f0a0a;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button.submit-btn:hover {
    background-color: #510b0a;
  }
  </style>
  