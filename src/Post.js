import CommentsPage from "./CommentsPage"

function Post ({post, commentsData}) {
    

    const {content, user, id} = post 
    const {username, photo_src} = user
    
    //ternary for showing comments button, when click, 
    //logic shows comments if post id = comment post id 

    //filters out comments based on post id


    let filteredComments = commentsData.filter(comment => comment.post_id == id) 
    let singleComment = filteredComments.map(comment => <CommentsPage comment={comment} key={comment.id}/>)
    


    //{showComments ? <CommentDetails comment={comment}/> : null }

    return (
        <>
         <img src={photo_src} className="profile_feed_img"></img>
         <p>{username} </p>
         <p>{content}</p>
         {/*hide show comments*/ }
         {singleComment}
        </>
    )
}

export default Post