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
              :class="{ focused: focusedInput === 'email' }"
              @focus="animateFocus('email')"
              @blur="resetAnimation()"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              :class="{ focused: focusedInput === 'password' }"
              @focus="animateFocus('password')"
              @blur="resetAnimation()"
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
              :class="{ focused: focusedInput === 'confirmPassword' }"
              @focus="animateFocus('confirmPassword')"
              @blur="resetAnimation()"
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
import axios from "axios";

export default {
  name: "RegisterLayout",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      focusedInput: null,
    };
  },
  methods: {
  async handleSubmit() {
    if (!this.email || !this.password || !this.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/register`,
        {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
      );

      alert("Registration successful!");

      // Clear form fields
      this.email = "";
      this.password = "";
      this.confirmPassword = "";

      // Redirect to login page
      this.$router.push('/login');
    } catch (err) {
      const message = err.response?.data?.error || err.message;
      alert(`Error: ${message}`);
    }
  },
  animateFocus(inputName) {
    this.focusedInput = inputName;
  },
  resetAnimation() {
    this.focusedInput = null;
  },
},
}
</script>

<style scoped>
.register-layout {
  font-family: 'Arial', sans-serif;
  background-color: #04020d;
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
  box-shadow: 0 0 5px #4caf50;
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
  background-color: #510b0a;
}
</style>
