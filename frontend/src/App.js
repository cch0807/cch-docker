import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [lists, setLists] = useState([])
  const [value ,setValue] = useState("")

  useEffect(() => {
    // 여기서 데이터베이스에 있는 값을 가져온다.
    
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <div className="container">
        <form className="example" onSubmit>
          <input
            type="text"
            palceholder="입력해주세요!"
          />
          <button type="submit">확인</button>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
