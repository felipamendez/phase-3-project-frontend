import CommentsPage from "./CommentsPage"
import React, { useState } from "react";
import Heart from "react-animated-heart";

function Post ({post, commentsData}) {
    const {content, user, id} = post 
    const {username, photo_src} = user
    const [isClick, setClick]=useState(false)
    


    function handleDelete(){
        
            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "DELETE",
            })
              .then((r) => r.json())
              .then(() => console.log("deleted!"));
          }

    function handlePatch(){
    
            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                isClick: !post.isClick,
              }),
            })
              .then((r) => r.json())
              .then((updatedPost) => console.log(updatedPost));

            setClick((isClick)=>!isClick)

          }


    
    //ternary for showing comments button, when click, 
    //logic shows comments if post id = comment post id 

    //filters out comments based on post id


    let filteredComments = commentsData.filter(comment => comment.post_id == id) 
    let singleComment = filteredComments.map(comment => <CommentsPage comment={comment} key={comment.id}/>)
    


    //{showComments ? <CommentDetails comment={comment}/> : null }

    return (
        <>
        <div>
         <img src={photo_src} className="profile_feed_img"></img>
         <p>{username} </p>
         <p>{content}</p>
         </div>
         <div>
         <button onClick={handleDelete}>Delete Post</button>
         <Heart isClick={isClick} onClick={() =>setClick(!isClick)}/>
         </div>
         {/*hide show comments*/ }
         {singleComment}
        
        </>
    )
}

export default Post