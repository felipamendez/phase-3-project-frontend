import CommentsPage from './CommentsPage'
import { NavLink } from "react-router-dom";
import Post from './Post'

function UserFeed({postData, commentsData, handleDeletePost, userData}) {


//    console.log(postData[2])
   
    // console.log(singlePost)
    // let posts = ["yup", "hi", "react is great"]

   
    let singlePost = postData.map(post => <Post post={post} 
        key={post.id}
         commentsData={commentsData}
         handleDeletePost={handleDeletePost}
         userData={userData}
          />)

return (
    <>
        <p>hi from User Feed</p>

        <nav>
            <ul>
                <li>
                <NavLink to="/">UserFeed</NavLink>
                </li>
                <li>
                    <NavLink to="/commentspage">CommentsPage</NavLink>
                </li>
            </ul>
        </nav> 
        {singlePost}
        
    </>
)
}

export default UserFeed;