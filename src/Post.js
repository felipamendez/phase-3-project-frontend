import CommentsPage from "./CommentsPage"
import React, { useState } from "react";


function Post ({post, commentsData, handleDeletePost, userData}) {
    const {content, user, id} = post 
    const {username, photo_src} = user
    const [is_click, setClick]=useState(post.is_click)
    
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
         <p> {content} </p>
         </div>

         <button onClick={handleDelete}>Delete Post</button>
         
       
         {/*hide show comments*/ }
         {singleComment}
         {is_click ? <button onClick={handlePatch} className="emoji-button active">❤️</button> : <button onClick={handlePatch} className="emoji-button">♡</button>
        }
        </>
    )
}

export default Post