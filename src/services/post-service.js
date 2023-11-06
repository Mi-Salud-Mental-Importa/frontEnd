import {myAxios} from "./helper"

//create a post function
export const createPost=(postData)=>{
    return myAxios.post(`/posts`,postData).then(response=>response.data)
};

//get all posts
export const loadAllPosts=(pageNumber,pageSize)=>{
    return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then(response=>response.data)
};

//get post x Id
export const loadPost=(postId)=>{
    return myAxios.get("/posts/"+postId).then((response)=>response.data)
};

//post a comment
export const createComment=(comment,postId)=>{
    return myAxios.post(`/post/${postId}/comments`,comment)
};
