import { useParams } from "react-router-dom"

function UserPage ({ userData }) {

    const {userId} = useParams()
    const user = userData.find( user => user.id === parseInt(userId) )
    const {bio, photo_src, username, posts} = user
    const singleUserPost = posts.map(post => <p>{post.content}</p>)

    //refreshing - useeffect listen for userdata, check if userdata not there, if not then fetch, 
    //need state setter from app.js passed in 
   
    return(
        <div className="user-page-container">
            <img src={photo_src} className="user-page-img" alt={username}></img>
            <p> {username} </p>
            <p> {bio} </p>
            <div className="user-feed-containter">
              <div className="post-contianer"> {singleUserPost} </div>
            </div>

        </div>
    )
}

export default UserPage