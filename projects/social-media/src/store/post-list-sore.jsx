import { useReducer } from "react";
import { createContext } from "react";
// const DEFAULT_POST_LIST =[
//   {
//   id:'1',
//   title:'Going to Mumbai',
//   body:'Hi Friends , I am Going to Mumbai for my vacations.Hope to enjoy a lot. Peace out.',
//   reactions:2,
//   userId:'user-9',
//   tags:['vacation','mumbai','enjoying'],
//   },
//   {
//     id:'2',
//     title:'Going to Jetpur',
//     body:'Hi Friends , I am Going to Jetpur for my holidays.Hope to enjoy a lot. Peace out.',
//     reactions:10,
//     userId:'user-3',
//     tags:['home','jetpur','holiday'],
//   }
// ];
export const PostList = createContext({
  postList : [],
  addPost : () =>{},
  addInitialPosts : () =>{},
  deletePost : () =>{},
});
const postListReducer = (currPostList,action) =>{
  let newPostList=currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  }
  else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts;
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [...currPostList , action.payload];
  }
  return newPostList;
}
const PostListProvider = ({children}) =>{
  const[postList,dispatchPostList]=useReducer(postListReducer,[]);

  const addPost = (userId,postTitle,postBody,reactions,tags) =>{
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:reactions,
        userId:userId,
        tags:tags, 
      }
    })
  }
  const addInitialPosts = (posts) =>{
    dispatchPostList({
      type:'ADD_INITIAL_POSTS',
      payload:{
        posts,
      }
    })
  }
  const deletePost = (postId) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId,
      }
    })
  }

   return (
      <PostList.Provider value={
        {postList,
        addPost,
        addInitialPosts,
        deletePost}
      }>
          {children}
      </PostList.Provider> 
   );
}

export default PostListProvider;