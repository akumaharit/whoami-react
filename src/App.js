import React,{useState} from 'react';
import './App.css';
import List from './List';
import NavBar from './navbar';
import Input from './Input';
import Post from './Post';

let id = 1;


function App() {

  const [posts, setPosts] = useState([]) //array ไปก่อน

  function addPost(title){
    const newPost = {id, title}
    setPosts([newPost, ...posts]);
    id += 1
  }

  function deletePost(id){
    const updatedPosts = posts.filter((post) => post.id !== id) //จะวน post แต่ละตัว ถ้ามันเท่ากัน เราจะไม่เอามันมาใส่
    setPosts(updatedPosts)
  }

  return (
  <div className = "App">
    <h1>เลือกหมวดหมู่ที่ต้องการ</h1>
    <NavBar/>
    <List/>
    <Input addPost={addPost}/>
    {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost}/>)} 
  </div>
  );
} 
export default App;
