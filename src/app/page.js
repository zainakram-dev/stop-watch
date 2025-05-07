


"use client"
import {useState,useRef} from "react"

export default function StopWatch(){
  const[time,setTime] = useState(0);
  const intervalRef=useRef(null)

const startTimer=()=>{
 if(intervalRef.current!==null) return;
 intervalRef.current=setInterval(()=>{setTime((prevTime)=>prevTime+10)},10)
};
const stopTimer=()=>{clearInterval(intervalRef.current);
intervalRef.current=null}
const resetTimer=()=>{
  stopTimer();
  setTime(0)
}

const formatTime=(time)=>{ 
const minutes=Math.floor(time / 60000);
const seconds=Math.floor((time % 60000)/1000);
const milliseconds=Math.floor((time % 1000)/10)
return (
  `${String(minutes).padStart(2,"0")}:`+
  `${String(seconds).padStart(2,"0")}.`+
  `${String(milliseconds).padStart(2,"0")}`
)
}; 

  return(
    <div style={styles.contener}><span style={styles.watch}>{formatTime(time)}</span>
    <button style={styles.startBtn} onClick={startTimer}>Start</button>
    <button style={styles.stopBtn} onClick={stopTimer}>Stop</button>
    <button style={styles.resetBtn} onClick={resetTimer}>ReSet</button>
    </div>
  )

}
const styles={
contener:{
  margin:"300px 0px 0px 400px",

  
},
  watch:{
    margin:"20px",
    padding:'20px',
fontSize:"50px",
    textAlign:"center",
color:"white",
backgroundColor:"blue",  
border:"2px solid",
borderColor:"green",
borderRadius:"15px"
},
startBtn:{
  padding:"5px",
  margin:"5px",
  border:"2px solid",
  borderColor:"white",
  borderRadius:"20px",
  backgroundColor:"green",
},
stopBtn:{
  padding:"5px",
  margin:"5px",
  border:"2px solid",
  borderColor:"white",
  borderRadius:"20px",
  backgroundColor:"green",
},
resetBtn:{
  padding:"5px",
  margin:"5px",
  border:"2px solid",
  borderColor:"white",
  borderRadius:"20px",
  backgroundColor:"green",
},

}


