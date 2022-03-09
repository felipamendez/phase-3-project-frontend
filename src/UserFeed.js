import CommentsPage from './CommentsPage'
import { NavLink, Switch, Route } from "react-router-dom";
import Post from './Post'
import UserPage from './UserPage';


function UserFeed({postData, commentsData, handleDeletePost, userData}) {
   
    let singlePost = postData.map(post => <Post 
        post={post} 
        key={post.id}
        commentsData={commentsData}
        handleDeletePost={handleDeletePost}
        userData = {userData}
        />)

return (
    <>
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
        <Switch>
                <Route path={`users/:userId`} component={UserPage} />
         </Switch>
    </>
)
}

export default UserFeed;