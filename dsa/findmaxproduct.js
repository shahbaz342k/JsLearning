var arr = [2,3,-2,4]
var arr1 = [1,3,-1,0,5,9,-3,5]

function findMaxProduct(nums,n){
    // get max product all continious positive integr from tthe given array
    if(nums==null||nums.length==0)
            return 0;
        let maxProduct = nums[0];
        let max_temp = nums[0];
        let min_temp = nums[0];
        for(let i=1;i<nums.length;i++) {
            let a = nums[i]*max_temp;
            let b = nums[i]*min_temp;
            max_temp = Math.max(Math.max(a,b), nums[i]);
            min_temp = Math.min(Math.min(a,b), nums[i]);
            // console.log('max_temp : ',max_temp)
            // console.log('min_temp : ',min_temp)
            console.log ( 'maxProduct : max_temp : ', maxProduct, max_temp )
            maxProduct = Math.max(maxProduct, max_temp);
        }
        return maxProduct;
}
let mp = findMaxProduct(arr1, arr1.length)
console.log(mp)

// import { useEffect, useRef, useState } from "react";

/*const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeShow, setTimeShow] = useState(false);

  //the useRef Hook allows you to persist data between renders
  const prevMinutesRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevMinutesRef.current = minutes;
  }, [minutes]);

  //the useRef Hook allows you to persist data between renders
  const prevSecondsRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevSecondsRef.current = seconds;
  }, [seconds]);

  const handleWatchEvent = (e, type) => {
    setTimeShow(false);
    e.preventDefault();
    console.log(prevSecondsRef);
    if (type === "start") {
      // console.log("sd");
      console.log("timeShow", timeShow);
      setMinutes(document.getElementById("minutes").value);
      setSeconds(document.getElementById("seconds").value);
      setTimeShow(true);
    } else if (type === "pause") {
      setMinutes(prevMinutesRef.current);
      setSeconds(prevSecondsRef.current);
      setTimeShow(true);
    } else if (type === "restart") {
      setMinutes("00");
      setSeconds("00");
      setTimeShow(false);
    }
  };
  var timer;
  useEffect(() => {
    let timer = setInterval( () => {
      setSeconds( seconds-1 );
      if( seconds == 0 ){
        setMinutes( minutes-1 )
        setSeconds( 59 );
      }
      if( minutes == 0 ){
        setSeconds(0)
      }
      
    }, 1000)
    
    return () => clearInterval(timer)
  },[minutes,seconds]);

  return (
    <div className="container">
      <input
        type="number"
        placeholder="minutes"
        id="minutes"
        onChange={(e) => setMinutes(e.target.value)}
      />
      <input
        type="number"
        placeholder="seconds"
        id="seconds"
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button onClick={(e) => handleWatchEvent(e, "start")}>Start</button>
      <button onClick={(e) => handleWatchEvent(e, "pause")}>
        Pause / Resume
      </button>
      <button onClick={(e) => handleWatchEvent(e, "restart")}>Restart</button>
      <div className="timer">
        <h2>
          {timeShow ? `${ minutes < 10  ? '0'+minutes : minutes }:${seconds < 10 ? '0'+seconds: seconds }` : "00:00"}
          // {/* {`${minutes}:${seconds}`} 
        // }
//         </h2>
//       </div>
//     </div>
//   );
// }
