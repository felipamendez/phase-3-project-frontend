import { Switch, Route } from "react-router-dom";
import Post from './Post'
import UserPage from './UserPage'


function UserFeed({postData, commentsData, handleDeletePost, userData}) {
   
    let singlePost = postData.map(post => <Post 
        post={post} 
        key={post.id}
        commentsData={commentsData}
        handleDeletePost={handleDeletePost}
        userData = {userData}
        />)

return (
    <div className="user-feed-containter">

        {singlePost} 

        <Switch>
                <Route path={`users/:userId`} component={UserPage} />
        </Switch>
    </div>
)
}

export default UserFeed;