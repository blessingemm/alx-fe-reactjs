import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required!");
      return;
    }
    if (!email) {
      setErrors("Email is required!");
      return;
    }
    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        alert("User registered successfully!");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 rounded-xl w-80 mx-auto mt-10 shadow"
    >
      <h2 className="text-xl font-bold mb-8 self-center">Controlled Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border rounded"
      />

      {errors && <p className="text-red-500 text-sm mb-2">{errors}</p>}

      <button
        type="submit"
        className="bg-blue-500 p-1 text-white py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
