import CommentsPage from "./CommentsPage"
import React, { useState } from "react";
import Heart from "react-animated-heart";

function Post ({post, commentsData, handleDeletePost}) {
    const {content, user, id} = post 
    const {username, photo_src} = user
    const [is_click, setClick]=useState(false)
    


    function handleDelete(){
        
            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "DELETE",
            })
              .then((r) => r.json())
              .then(() => console.log("deleted!"));
              handleDeletePost(post.id)

          }

    function handlePatch(){

      setClick((is_click)=>!is_click)

      const newClick = is_click
      console.log(newClick)


            fetch(`http://localhost:9292/posts/${post.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                is_click: newClick,
              }),
            })
              .then((r) => r.json())
              .then((updatedPost) => console.log(updatedPost));
                
    

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
         <Heart isClick={is_click} onClick={handlePatch}/>
       
         {/*hide show comments*/ }
         {singleComment}
        
        </>
    )
}

export default Post