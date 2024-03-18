import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GenerateToken from './components/GenerateToken';
import PasswordReset from './components/PasswordReset';

function App() {
  return (
    <Router>
      <div>
        <h1>Password Reset App</h1>
        {/* Links to different routes */}
        <nav>
          <ul>
            <li>
              <Link to="/generatetoken">Generate Token</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for different components */}
        <Routes>
        <Route path="/generatetoken" element={<GenerateToken/>} />
        <Route path="/reset" element={<PasswordReset/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




