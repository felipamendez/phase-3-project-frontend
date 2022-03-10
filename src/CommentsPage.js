function CommentsPage({comment}) {
    const {content, user} = comment


    return(
        <>
         <p className="comments-username">{user.username}:</p>
         <p className="comments-content">{content}</p>
        </>
    )
}

export default CommentsPage