import React, { useRef, useState } from "react";

// export default function TestRef() {
//   let ref =useRef(0);
//   //let ref=0;

//   function handleClick(){
//     //ref+=1;
//     ref.current+=1;
//     alert('You clicked '+ref.current+' times!');
//   }

//   return (
//     <div>
//         <h1>Click counts : {ref.current}</h1>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

export default function TestRef() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <h1>Time passed : {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
