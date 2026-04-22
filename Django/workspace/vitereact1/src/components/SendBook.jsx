import { useState } from "react"
import axios from "axios";
function SendBook(){
    
    const [bookid,setBookid] = useState('');
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const sendData = async()=>{
        try{
            const url = 'http://127.0.0.1:8000/apiapp/setBooks/';
            const response = await axios.post(url,{
                bookid:bookid,
                title:title,
                price:price
            
            });
            alert(response.data.message);
        }catch(error){
            console.error('Error sending data:',error);
        }
    };
    return(
        <div>
            <h1>Send Book Data to Django</h1>
            <input 
             type="text" 
             placeholder="Enter book id"
             value={bookid}
             onChange={(e) => setBookid(e.target.value)}
             />
            
            <input 
             type="text" 
             placeholder="Enter book title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             />
            
             <input 
             type="text" 
             placeholder="Enter book price"
             value={price}
             onChange={(e) => setPrice(e.target.value)}
                />
            <button onClick={sendData}>Send Data</button>
        </div>
    );
}

export default SendBook;