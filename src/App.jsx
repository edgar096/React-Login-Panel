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
        <div>
          <div>
            <label htmlFor="email">E-Mail: </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
