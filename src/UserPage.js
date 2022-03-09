import { useParams } from "react-router-dom"


function UserPage ({userData}) {

    // const {username} = user

    const {userId} = useParams()

    const user = userData.find( user => user.id === parseInt(userId) )
    const {bio, photo_src, username, posts} = user

    // debugger
    
    //refreshing - useeffect listen for userdata, check if userdata not there, if not then fetch, need state setter from app.js passed in 

   

    return(
        
        <>
            <p>{username}</p>
            <p>hi</p> 
            
            {/* <p>Hi from UserPage: {username} </p> */}
             {/* <p> {user[params.id].username} </p> */}
        </>
    )
}

export default UserPage