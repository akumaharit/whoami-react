import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Input({addPost}){ //รับ addPost เข้ามาจาก App.js
    const [input, setInput] = useState('') //เก็บค่า input ไว้ใน state ชื่อ input

    function onChange(event){
        setInput(event.target.value) //เปลี่ยนค่าใน input ให้เป็นค่าที่พิมพ์เข้ามา
    }

    function onKeyDown(event){
        const title = event.target.value //เก็บค่า input ไว้ในตัวแปร title
        if(event.key === 'Enter' && title){ //ถ้ากด Enter และ title มีค่า
            addPost(title) //เรียกใช้งาน addPost ที่รับมาจาก App.js
            setInput('') //เคลียร์ค่า input
        }
    }

    return (
        <div className = "input">
            <div className="input__header">Create Post</div>
            <input
                className ="input__field"
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

Input.propTypes ={
    addPost: PropTypes.func.isRequired //บังคับให้ pass function เข้ามาใน addPost
}

export default Input;