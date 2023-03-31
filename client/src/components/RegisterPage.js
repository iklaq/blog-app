import { useState, useEffect } from "react";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();
   
      try {
        await fetch("http://localhost:4000/register", {
          method: "POST",
          body: JSON.stringify({ userName, password }),
          headers: { "Content-Type": "application/json" },
        })
        
      }
      catch(e) {
        console.log("try again");
      };
  };

  return (
    <div className="register-page">
      <h1>REGISTERR</h1>
      <form className="form" onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
