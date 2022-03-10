import { useParams } from "react-router-dom"

function UserPage ({ userData }) {

    const {userId} = useParams()
    const user = userData.find( user => user.id === parseInt(userId) )
    const {bio, photo_src, username, posts} = user
    const singleUserPost = posts.map(post => <p>{post.content}</p>)

    //refreshing - useeffect listen for userdata, check if userdata not there, if not then fetch, 
    //need state setter from app.js passed in 
   
    return(
        
        <>
            <p> {username} </p>
            <img src={photo_src} className="profile_feed_img" alt={username}></img>
            <p> {bio} </p>
            <div> {singleUserPost} </div>
        </>
    )
}

export default UserPage