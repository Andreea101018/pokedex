import './App.css';
import NavBar from './components/NavBar';
import About from './components/AboutPage';
import Footer from './components/Footer';

import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <Router basename="/pokedex">
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="MainContent">
                <div className="PictureContainer">
                  {/* Add your picture component or image here */}
                </div>
                <PokemonList />
              </div>
            }
          />
          <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;