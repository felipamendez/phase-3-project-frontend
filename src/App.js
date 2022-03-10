import './App.css';
import { useState, useEffect } from "react";
import UserFeed from './UserFeed';
import MakePost from './MakePost'
import Login from './Login'
import UserPage from './UserPage';
import {
  Switch,
  Route
  } from "react-router-dom";

function App() {

  const [postData, setPostData] = useState([])
  const [userData, setUserData] = useState([])
  const [commentsData, setCommentsData] = useState([])
  const [login, setLogin] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/posts`)
    .then(resp => resp.json())
    .then(pdata => {
      setPostData(pdata)
    })
  }, [])

  // console.log(postData)

  function handleAddPost(newPost){
    setPostData([...postData, newPost])
 }

  function handleDeletePost(id){
    const updatedPosts = postData.filter(data => data.id !== id)
    setPostData(updatedPosts)
  }

  function isLogin(userIntake) {
    const username1 = userData.filter(user => user.username === userIntake.username) 
    const password1 = userData.filter(user => user.password === userIntake.password)
    const LoginDats = password1.concat(username1)
    setLogin(LoginDats)
  }
 
   useEffect(() => {
     fetch(`http://localhost:9292/users`)
     .then(resp => resp.json())
     .then(data => {
       setUserData(data)
     })
   }, [])

   //console.log(userData)

  useEffect(() => {
    fetch(`http://localhost:9292/comments`)
    .then(resp => resp.json())
    .then(data => {
      setCommentsData(data)
    })
  }, [])

  // console.log(commentsData)

  return (
    <div className="App">
      <header className="App-header">       
       <div>
        <MakePost handleAddPost={handleAddPost}/>
  
        <Switch>
            <Route exact path="/users">
            </Route>
            <Route exact path="/login">
             <Login isLogin={isLogin} login={login}/>
            </Route>
            <Route exact path="/">
              <UserFeed postData={postData}
               commentsData={commentsData}
               handleDeletePost={handleDeletePost}
               userData={userData}
               />
            </Route>
            <Route exact path={`/users/:userId`} >
              <UserPage userData={userData}/>
            </Route>
        </Switch>
          
      </div>
      </header>

      

    </div>
  );
}

export default App;
