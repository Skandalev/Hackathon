import { useEffect, useState } from "react";

import axios from "axios";

function DataBase() {
  const [todoArray, setTodoArray] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodos = () => {
    axios.get("/api/todos").then((res) => {
      res.data && setTodoArray(res.data);
      console.log(res.data);
  
    });
  };
  // picture:"" , adress:"", email:"", phone:"", fullName:""
  const postTodo = () => {
    const todo = { action: newTodo, email: "yewaa", picture:"https://res.cloudinary.com/dumgi49os/image/upload/cld-sample-5.jpg" , adress:"222", phone:"333", fullName:"444"
                  
     };
    console.log(todo);
    axios.post("/api/todos", todo).then((res) => {
      res.data && setNewTodo("");
      
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
    postTodo();
    let newlist = [...todoArray];
    if (newTodo.length > 0) {
     
      newlist.push(newTodo);
      setTodoArray(newlist);
    } else {
      setTodoArray(todoArray);
    }
  };



  function delete1(i,q) {
    deleteTodo(q)
    let temp = [...todoArray];
    temp.splice(i, 1);
    setTodoArray(temp);
  }
  return (
    <div className="DataBase">
      <input
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          addToDo();
        }}
      >
        submit
      </button>
      {newTodo}

      <ul>
        {todoArray.map((e, i) => {
          return (
            <li key={e._id}>
              {e.action}
              <br />
              {e.email}
              <br />
               {e.picture} 
               <img style={{width:"20vw"}} src= {e.picture} alt="" sizes="" srcset="" />
              <button
                onClick={() => {
                  delete1(i,e._id);
                }}
              >
                X
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataBase;
