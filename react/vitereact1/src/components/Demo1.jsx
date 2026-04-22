import {useState,useEffect} from "react";

function ContactForm(){
    
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
   
    const handlesubmit=(e)=>{
        e.preventDefault();

        // form validation logic here
        console.log(e.target.name.value);
        if(e.target.name.value.length>0&& e.target.email.value.length>0)
        document.getElementsByTagName('form')[0].submit();
    };
    return(
        <form action="https://mysirg.com" onSubmit={handlesubmit}>
            <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e)=>setname(e.target.value)} />

            </div>
            <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>

    );

}

function Demo(){
    return(
        <ContactForm />
    );
}   



//Example 4 with list mean array and map function with props...

function Student(props){
    return(
        <li>{props.name}</li>
    );
}

function Demo4(){
    const students=["Hammad","Ali","Ahmed","Usman","Zain"];
    return(

        <>
        <h1>Students List</h1>
        <ul>
            {students.map((n)=>  <Student name={n} />)}
        </ul>
        </>
    );
}

// Example 3 Decision control condition with props...


function Loginsuccess(){
    return(
     
     <h1>Login Successfull Thank you Welcome</h1>

    );
} 

function Loginfailed(){
    return(

             <h1>Login Failed</h1>
    );
}

function Login(props){
    const[username,setusername]=useState
   ("hammad");
   const [password,setpassword]=useState("1234");

      return username==props.username && password==props.password? <Loginsuccess /> : <Loginfailed />;
   //    if(username==props.username && password==props.password) 
//    return <Loginsuccess />
//    else 
//    return <Loginfailed />
}

function Demo3(){

     return(
        <Login username="hammad" password="1234"/>
     );

}






//Example 2 with event props...
 
function F1(props){
    return(
        <h1 style={{color:props.color}}>{props.text}</h1>
    );

}




function Demo2(){
    const[textcolor,settextcolor]=useState('red');
    const [text,settext]=useState("i like red color");
   useEffect(()=>{
    let msg=`i like ${textcolor} color`;
    
    settext(msg);
   });
    return(
        <div>
            <F1 text={text} color={textcolor}/>
            <button onClick={()=>settextcolor('green')}>Green</button>
            <button onClick={()=>settextcolor('purple')}>Purple</button>
            <button onClick={()=>settextcolor('blue')}>Blue</button>
            <input type="text" value={textcolor} onChange={(e)=>settextcolor(e.target.value)} />
        </div>
    );
}



// Example 1  UseEffect

function Demo1(){
    const [i,seti]=useState(0);
    const [Day,setDay]=useState('Monday');
    const days=['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
   
    useEffect(()=>{
        console.log("use effect called");
    },[i]);
     
    return(
       <>
        <h1>{i} is {Day}</h1>
        <button onClick={()=>seti(i+1)}>I ki value </button>
         <button onClick={()=>setDay(days[i%7])}>Change Day </button>
   </>
    );

}
export default Demo;