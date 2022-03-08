import PostPage from './PostPage'

function UserFeed() {

    let posts = ["yup", "hi", "react is great"]

return (
    <>
    <p>hi from User Feed</p>
    {posts.map(post =>  <PostPage post={post} />)}
    </>
)
}

export default UserFeed;