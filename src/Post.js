import CommentsPage from "./CommentsPage"
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Post ({ post, commentsData, handleDeletePost }) {
  
    const {content, user, id} = post 
    const {username, photo_src} = user
    const [is_click, setClick] = useState(post.is_click)
    const [isHidden, setIsHidden] = useState(false)
     
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

    function handleHideClick() {
        setIsHidden(isHidden => !isHidden)
    }

    return (
        <div className="post-contianer">
      
            <div>
                <img src={photo_src} className="profile_feed_img" alt={username}></img>
                <p className="post-username-link"> 
                    <Link to={`users/${user.id}`}>
                     {user.username} 
                    </Link>
                </p>
                <p> {content} </p>
            </div>

           
            <div className="button-container">
              {is_click ? <button  onClick={handlePatch} className="emoji-button active"> ❤️ </button> : <button onClick={handlePatch} className="emoji-button"> ♡ </button>}

              <button className="button" onClick={handleHideClick}> {isHidden ? "Hide Comments" : "Show Comments"} </button>
              
              <button className="button" onClick={handleDelete}> Delete Post </button>

              
            </div>
            {isHidden ? (<div className="comments-container"> {singleComment} </div>) : null}
        </div>
    )
}

export default Post