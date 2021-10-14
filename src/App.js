import './App.css';
import {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import app from './firebase';


function App() {

const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [emailError,setEmailError] = useState('');
const [passwordError,setPasswordError] = useState('');
const [hasAccount,setHasAccount] = useState(false);

const handleLogin = () => {
  app
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
      }
    });
};

const handleSignup = () => {
  app
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err=>{
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
    }
  });
}

const handleLogout = () => {
  app.auth().signOut();
}


  return (
    <div className="todo-app">
     <TodoList />
    </div>
  );
}

export default App;
