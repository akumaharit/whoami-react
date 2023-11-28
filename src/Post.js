import React from 'react';
import PropTypes from 'prop-types';


// pass deletePost มาจาก App.js เพื่อที่จะได้ส่ง id ไปรันใน app.js ได้แล้ว setPosts ใหม่
function Post({id, title, deletePost}){
    
    return (
        <div className="post">
            <button className="post__delete" onClick={()=>deletePost(id)}>x</button>
            <div className="post__id">{id}</div>
            <div className="post__title">{title}</div>
            <img className="post__image" src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    );
};

PropTypes.Post ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default Post;