import { useState } from 'react';
import './App.css';

function App() {
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
