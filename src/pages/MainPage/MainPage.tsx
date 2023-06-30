import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate()

  const goPrac1 = () => {
    navigate("/prac1");
  };
  return (
    <div>
       <div>MainPage</div>
      <button className="loginBtn" onClick={goPrac1}>
        1번 carousel
      </button>
    </div>
   
    
  )
}

export default MainPage