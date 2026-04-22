import { useState } from 'react';
function Counter(){

    // let [count,setcount]=useState(10);
    const [count,setCount]=useState(10);
    
    
     const counterup=() =>{
                //  count++;
                
                setCount(count =>count+1);
                  console.log('Up',count);
                
                }
    const counterdown=() =>{
                 setCount(count =>count-1);
                  console.log('Down',count);
                
                }

return (
<>
<h1>Counter example</h1> 
<h2>count={count}</h2>
<button onClick={counterup}>UP</button>
<button onClick={counterdown}>Down</button>
</>
);

}
export default Counter;