import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import './database.css'
function DataBase(props) {
  const [todoArray, setTodoArray] = useState([]);
  // const [newTodo, setNewTodo] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getTodos = () => {
    axios.get("/api/todos").then((res) => {
      res.data && setTodoArray(res.data);
      console.log(res.data);
  
    });
  };
  // picture:"" , adress:"", email:"", phone:"", fullName:""
 
  const postTodo = () => {
    const todo = props.arrayTodata
    console.log(todo);
    axios.post("/api/todos", todo).then((res) => {
      // res.data && setNewTodo("");
      
    });
    axios.get("/api/todos").then((res) => {
      res.data && setTodoArray(res.data);})
    
  };
  const deleteTodo = (id) => {
    axios
    .delete(`/api/todos/${id}`)
    .then((res) => {
        if (res.data) {
            getTodos();
        }
    })
    .catch((err) => console.log(err));
};

  useEffect(() => {
    getTodos();
  }, []);
  const addToDo = () => {
    setIsOpen(true)
    postTodo();
    // let newlist = [...todoArray];
    // setTodoArray(todoArray);
    // if (newTodo.length > 0) {
     
    //   newlist.push(newTodo);
    //   setTodoArray(newlist);
    // } else {
    //   setTodoArray(todoArray);
    // }
  };



  function delete1(i,q) {
    deleteTodo(q)
    let temp = [...todoArray];
    temp.splice(i, 1);
    setTodoArray(temp);
  }
  return (
    <div className="DataBase">
      <Button
      variant="contained"
        onClick={() => {
          addToDo();
        }}
      >
        אישור
      </Button>
      {/* <input
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      ></input>
      
      {newTodo} */}
{isOpen&&
      <ul>
        {todoArray.map((e, i) => {
          return (
            <li key={e._id}>
              {e.name}
              <br />
              {e.action}
              <br />
              {e.email}
              <br />
               {e.adress} 
               <img style={{width:"20vw"}} src= {e.picture} alt="" sizes="" t="" />
              <Button variant="error"
                onClick={() => {
                  delete1(i,e._id);
                }}
              >
                X
              </Button>{" "}
            </li>
          );
        })}
      </ul>}
    </div>
  );
}

export default DataBase;
