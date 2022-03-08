import CommentsPage from './CommentsPage'
import { NavLink } from "react-router-dom";

function UserFeed() {

    let posts = ["yup", "hi", "react is great"]

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
    {posts.map(post =>  <CommentsPage post={post} /> )}
    </>
)
}

export default UserFeed;