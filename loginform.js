import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const permanentUsername = "Admin";
  const permanentPassword = "Admin123";

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === permanentUsername && password === permanentPassword) {
      showPopup("hide");
      alert("Login successful!");
    
      window.location.replace("http://localhost:3001");  // reactrouters use karala port eken poet ekata maru wena widihata hadala thiyenne
      showPopup("login-popup");
      setTimeout(() => showPopup("hide"), 3000);
    }
  };

  return (
    <div className="box">
    <div className="cover">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="login-btn" onClick={handleLogin}>
        Login
      </div>
      
      <p className="text">or</p>
      <p className="text">Login using</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
