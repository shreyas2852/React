import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-sore";

const CreatePost = () =>{
  const {addPost} = useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handlesubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value ="";

    addPost(userId,postTitle,postBody,reactions,tags);
  }
  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" className="form-control" id="UserId" ref ={userIdElement} placeholder="Enter your UserId"/>
      </div> 
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder="Enter Title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea  rows="4" type="text" className="form-control" id="body" ref={postBodyElement} placeholder="Tell us about it "/>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">No of Reactions</label>
        <input type="text" className="form-control" id="reactions" ref={reactionsElement} placeholder="No of people reacted"/>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="hashtags"/>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}
export default CreatePost;