const API_URL = "https://jsonplaceholder.typicode.com";

// LOGIN API
async function loginUser(data) {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Login failed");

  return res.json();
}

// SIGNUP API
async function signupUser(data) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Signup failed");

  return res.json();
}