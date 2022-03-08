import './App.css';
import { useState, useEffect } from "react";
import UserFeed from './UserFeed';
import CommentsPage from './CommentsPage'
import MakePost from './MakePost'
import {
  Switch,
  Route
  } from "react-router-dom";

function App() {

  const [postData, setPostData] = useState([])
  const [userData, setUserData] = useState([])
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/posts`)
    .then(resp => resp.json())
    .then(data => {
      setPostData(data)
    })
  }, [])

  console.log(postData)

  // useEffect(() => {
  //   fetch(`http://localhost:9292/users`)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setUserData(data)
  //   })
  // }, [])
  
  // console.log(userData)

  // useEffect(() => {
  //   fetch(`http://localhost:9292/comments`)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setCommentsData(data)
  //   })
  // }, [])

  // console.log(commentsData)



  return (
    <div className="App">
      <header className="App-header">       
       <div>
  
        <Switch>
            <Route path="/commentspage">
              <CommentsPage />
            </Route>
            <Route path="/">
              <UserFeed postData={postData}/>
            </Route>
        </Switch>
          
      </div>
      </header>
      <MakePost/>
    </div>
  );
}

export default App;
