import React, { useState } from "react";

function MakePost({handleAddPost, login}) {
  const [content, setContent] = useState("");
  const [user_id, setUser_Id] = useState("");
  const [makePostIsHidden, setMakePostIsHidden] = useState(false)

  function handlePost(event) {
    setContent(event.target.value);
  }

  function handleID(event) {
      setUser_Id(event.target.value);
    }

  function handleSubmit(e) {
    e.preventDefault();
      const formData = {
         content: content,
         user_id: user_id,
         is_click: false
        };

        console.log(login)
        console.log(formData)
      fetch("http://localhost:9292/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
        .then((r) => r.json())
        .then((newPost) => handleAddPost(newPost));

  }

  function handleWritePostClick() {
    setMakePostIsHidden(makePostIsHidden => !makePostIsHidden)
  }

  return (
    <>
      { makePostIsHidden ? ( 
        <div>  
          <form onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Write your post" onChange={handlePost} value={content} />
            <input type="text" placeholder="Write your user ID" onChange={handleID} value={user_id} />
            <button type="submit">Submit</button>
          </form> 
        </div> ) : null }
        <button className="button" onClick={handleWritePostClick}> {makePostIsHidden ? "Hide Post Field" : "Write a Post"} </button>
    </>
  );
}
  export default MakePost;