import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="email" id="username" name="username"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"></input>
      </form>
    </div>
  );
}

export default App;
