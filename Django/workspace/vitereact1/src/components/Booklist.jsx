import { useState,useEffect } from "react"
import axios from "axios"
function Booklist(){ 
const [books,setBooks] = useState([]);
useEffect(()=>{
    const fetchbooks = async()=>{

        const url= 'http://127.0.0.1:8000/apiapp/getbooks/';
        const response= await axios.get(url);
        setBooks(response.data);
    }
    fetchbooks();
})
    return(
        <div>
            <h1>Books</h1>
            <table>
                {
                    books.map((book)=>(
                        <tr>
                        
                            <td>{book.bookid}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                    
                        </tr>

                    ))
                }
            </table>
        </div>
    );

}
export default Booklist;