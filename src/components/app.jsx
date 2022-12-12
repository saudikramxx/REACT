import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString().replace("AM","").replace("PM","");
   console.log(currentTime)
   const [time,setTime] = useState(currentTime)

  function getTime(){
    let currentTime = new Date().toLocaleTimeString().replace("AM","").replace("PM","");
    setTime(currentTime)
  }
  setInterval(getTime,1000)
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
