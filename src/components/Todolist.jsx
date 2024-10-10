import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const Todolist = () => {

    const [todo, setTodo] = useState('');

    const [db, setDb] = useState([]);
    //const [name,setName]=useState('')
    function database() {
       // alert("data has been posted")
        axios.post("http://localhost:3000/posts",{ todo })
        .then(() => {alert("data has been posted")
            setTodo('')
        })
        .catch(() => {
            alert("data has not been posted")
        })
    }
    
    function getdata() {
        axios.get("http://localhost:3000/posts")
        .then((ref) => {
            
                setDb(ref.data)
                alert("data has been retrived")   
        })
        .catch(() => {
            alert("data has not been getted")
        })
    }

    function updatedata(id, data){
        axios.put(`http://localhost:3000/posts/${id}`, {todo: data})
        .then(() => {
            console.log("data updated");
            getdata();
        })
        .catch(() => {
            console.log("data cannot update")
        })
    }

    function deleteDate(id, data){
        axios.delete(`http://localhost:3000/posts/${id}`,{todo: data})
        .then(() => {
            console.log("data deleted");
            getdata();
        })
        .catch(() => {
            console.log("data not deleted")
        })
    }


    function newData(id) {
        const data = prompt("enter the new data")
        updatedata(id, data)

    }

    console.log(db)
  return (
    <div>
        <p>
            {todo}
        </p>
        <TextField 
        id="outlined-basic"
        label="Todo" varient="outlined"
        value={todo}
        onChange={(ref) => setTodo(ref.target.value)}/>
    
        
       <br /> 
        <Button variant="contained" onClick={database}>POST</Button>
        <Button variant="contained" onClick={getdata}>GET</Button> 

        <div>
            <ul>
                {
                    db.map((item) => (
                        <li key={item.id}>
                            {item.todo}
                            <Button onClick={() => newData(item.id)}>Edit</Button> 
                            <Button onClick={() => deleteDate(item.id)}>Delete</Button></li>
                    ))
                }
            </ul>
        </div>
     </div>
    
  )
     
}


export default Todolist