function CommentsPage({comment}) {
    const {content, user} = comment


    return(
        <>
         <p>{user.username}</p>
         <p>{content}</p>
         
        </>
    )
}

export default CommentsPage