import React, { useState } from "react";

function Login({isLogin, login}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUser(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
      setPassword(event.target.value);
    }

    console.log(login.length)

   

  function handleSubmit(e) {
    e.preventDefault();
      const userIntake = {
      username: username,
      password: password}
    isLogin(userIntake)
    
    }
    
    

  return (
    <div className="login-container">
    {login.length === 2 ? `Welcome ${login[1].username}` : "Sorry Try Again" }

    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Write your username" onChange={handleUser} value={username} />
       <input type="text" placeholder="Write your user password" onChange={handlePassword} value={password} />
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}
  export default Login;