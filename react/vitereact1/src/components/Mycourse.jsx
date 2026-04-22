import { useState } from "react";
function Mycourse(){

// const [course, setCourse] = useState('Python');
// const [duration, setDuration] = useState('3 months');
   
const [learn, setLearn] = useState({
    course:'Python',
    duration:'3 months'
});

const updateduration = ()=>{
    setLearn((learn)=>{
        let A=document.getElementById('duration');
        return {...learn,duration:A.value};
    });
}
return(
       <>
        <h1>My Course is {learn.course}</h1>
        <h2>Duration is {learn.duration}</h2>
        <input type="text" id="duration" placeholder="enter duration" /><br />
        <button onClick={updateduration}>Update Course</button>
   </>
    )

    }
    export default Mycourse;
