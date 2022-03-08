import CommentsPage from "./CommentsPage"

function Post ({post, commentsData}) {
    

    const {content, user, id} = post 
    const {username, photo_src} = user
    // console.log(user)
    
    //ternary for showing comments button, when click, 
    //logic shows comments if post id = comment post id 

    //filters out comments based on post id

    //  If comments.post_id == post_id{return comments}else{ return null}


    let filteredComments = commentsData.filter(comment => comment.post_id = id) //dont have access to posts?

     let singleComment = filteredComments.map(comment => (<CommentsPage comment={comment} key={comment.id}/>))
        //  if (comment.post_id == id) {
        //      return comment
        // } else {
        //     return null
        // } 
        //  <CommentsPage comment={comment} key={comment.id}/>
    //     )
    // )


    //{showComments ? <CommentDetails comment={comment}/> : null }
    
    
    // console.log(filteredComments)

    return (
        <>
         <img src={photo_src} className="profile_feed_img"></img>
         <p>{username} </p>
         <p>{content}</p>
         {/*hide show comments*/ }
         {/* <CommentsPage /> */}
         {singleComment}
        </>
    )
}

export default Post