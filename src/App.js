import './App.css';
import {useState, useEffect} from 'react';
import TodoList from './components/TodoList';

function App() {

const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [emailError,setEmailError] = useState('');
const [passwordError,setPasswordError] = useState('');
const [hasAccount,setHasAccount] = useState(false);

  return (
    <div className="todo-app">
     <TodoList />
    </div>
  );
}

export default App;
