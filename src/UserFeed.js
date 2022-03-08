import CommentsPage from './CommentsPage'
import { NavLink } from "react-router-dom";

function UserFeed({postData}) {


//    console.log(postData[2])
   
    // console.log(singlePost)
    // let posts = ["yup", "hi", "react is great"]

return (
    <>
    <p>hi from User Feed</p>

    {/* <p> {postData.map(post => <CommentsPage post={post} />)} </p> */}

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
    {/* {posts.map(post =>  <CommentsPage post={post} /> )} */}
    </>
)
}

export default UserFeed;