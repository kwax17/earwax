import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';

function App() {
  return (
    // <div className="flex-column min-100-vh">
    //   <Header></Header>
    //   <main className="container">
    //     <About></About>
    //   </main>
    //   <Footer></Footer>
    // </div>
    <Router>
        <div className="flex-column min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              {/* <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
