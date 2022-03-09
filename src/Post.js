import CommentsPage from "./CommentsPage"
import React, { useState } from "react";
import UserPage from './UserPage';
import { NavLink, Link, Route, Switch, useRouteMatch } from "react-router-dom";


function Post ({post, commentsData, handleDeletePost, userData}) {

    // const { path } = useRouteMatch()

    const {content, user, id} = post 
    const {username, photo_src} = user
    const [is_click, setClick]=useState(post.is_click)
    
    console.log(userData)
    
    // const singleUser = userData.map(user => 
    //     <> 
    //      <Link to={`/users/${user.id}`}>
    //          {user.username} 
    //      </Link>
    //      <UserPage user = {user} /> {/* maybe throw this in app  to pass down user data*/}
    //     </>)
 
    console.log("post",post)


    function handleDelete(){
        
            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "DELETE",
            })
              .then((r) => r.json())
              .then(() => console.log("deleted!"));
              handleDeletePost(post.id)
    }

    function handlePatch(){

            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                is_click: !is_click,
              }),
            })
              .then((r) => r.json())
              .then((updatedPost) => setClick((is_click)=>!is_click));
    }

    let filteredComments = commentsData.filter(comment => comment.post_id == id) 
    let singleComment = filteredComments.map(comment => <CommentsPage comment={comment} key={comment.id}/>)
    
    //{showComments ? <CommentDetails comment={comment}/> : null }

    // console.log("singleUser", singleUser) 

    return (
        <div>
             
           
            <div>
                <img src={photo_src} className="profile_feed_img"></img>
                <p> 
                    <Link to={`users/${user.id}`}>
                     {user.username} 
                    </Link>
                </p>
                <p> {content} </p>
            </div>

            <button onClick={handleDelete}> Delete Post </button>

            {/*hide show comments*/ }
        
            {is_click ? <button onClick={handlePatch} className="emoji-button active"> ❤️ </button> : <button onClick={handlePatch} className="emoji-button"> ♡ </button>}

            {singleComment}
        </div>
    )
}

export default Post