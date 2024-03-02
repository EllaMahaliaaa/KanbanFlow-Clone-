import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import BoardPage from './Pages/BoardPage';
import './style/App.css';
/*import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';**/

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/board" element={<BoardPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
