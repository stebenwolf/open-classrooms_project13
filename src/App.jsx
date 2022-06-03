// @ts-nocheck
/* import logo from './logo.svg'; */
import './styles/App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn';
import User from './components/User';

/**
 * Returns the app structure filled with relevant data (according to the route).
 */
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/" element={<User />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;