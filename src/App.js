import React from 'react';
import NavBar from './navbar';
import './App.css';
import List from './List';

function App() {
  return (
  <div className="App">
    <NavBar/>
    <h1>เลือกหมวดหมู่ที่ต้องการ</h1>
    <List/>
  </div>
  );
} 
export default App;
