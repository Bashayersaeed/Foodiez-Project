import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import myImage from './pictures/food.jfif';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <img 
            src={myImage} 
            alt="Foodiez"
            className="home-image"
          />
          <h1>KBOG FOODIEZ</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2024 KBOG Foodiez. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
