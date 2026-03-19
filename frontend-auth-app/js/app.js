document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const toSignup = document.getElementById("toSignup");
  const toLogin = document.getElementById("toLogin");

  // Toggle
  toSignup.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  toLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // LOGIN
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");

    if (!email || !password) {
      error.textContent = "All fields are required";
      return;
    }

    try {
      await loginUser({ email, password });
      alert("Login Successful");
      error.textContent = "";
    } catch {
      error.textContent = "Login Failed";
    }
  });

  // SIGNUP
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const error = document.getElementById("signupError");

    if (!name || !email || !password) {
      error.textContent = "All fields are required";
      return;
    }

    try {
      await signupUser({ name, email, password });
      alert("Signup Successful");
      error.textContent = "";

      signupForm.style.display = "none";
      loginForm.style.display = "block";

    } catch {
      error.textContent = "Signup Failed";
    }
  });

});