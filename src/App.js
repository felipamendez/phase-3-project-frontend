// import logo from './logo.svg';
import './App.css';
import React from "react";
import UserFeed from './UserFeed';
import CommentsPage from './CommentsPage'
import {
  Switch,
  Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">       
       <div>
  
        <Switch>
            <Route path="/commentspage">
              <CommentsPage />
            </Route>
            <Route path="/">
              <UserFeed />
            </Route>
        </Switch>
          
      </div>
      </header>
    </div>
  );
}

export default App;
