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
    e.target.reset()
    }
    
    

  return (
    <div className="login-container">
    {login.length === 2 ? <h1>Welcome {login[1].username}</h1>  : <h1>Welcome to the Raven, Please login</h1> }
    {login.length === 2 ? null :
    <form onSubmit={handleSubmit}>
       <input className="textpost" type="text" placeholder="username" onChange={handleUser} value={username} />
       <input className="textpost" type="password" placeholder="password" onChange={handlePassword} value={password} />
    <button className="button" type="submit">Submit</button>
    </form> }
    </div>
  );
}
  export default Login;