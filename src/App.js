import './App.css';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './todo';
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState('');
  //create todo

  const setinputhandler = (event) => {
    setinput(event.target.value);
  };

  const createtodo = async (event) => {
    event.preventDefault();

    if (input.trim() === '') {
      alert('ENTER A VALUE');
      return;
    }

    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setinput('');
  };
  //read todo from firebase

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      settodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update todo from firebase
  const todocomplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };
  //delete todo
  const tododelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="todo_h1">TODO APP</h1>
        <form onSubmit={createtodo} className="todo_form">
          <input
            value={input}
            onChange={setinputhandler}
            className="todo_input"
            type="text"
            placeholder="add your todo"
          />
          <button className="todo_btn" type="submit">
            <AiOutlinePlus size={40} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              todocomplete={todocomplete}
              tododelete={tododelete}
            />
          ))}
        </ul>
        {todos.length < 1 ? (
          <p className="empty">EMPTY TODOBOX</p>
        ) : (
          <p className="todo_count">{`YOU HAVE ${todos.length} TODOS`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
