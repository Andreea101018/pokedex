import React, { useState, useEffect } from 'react';
import '../styles/PokemonList.css';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 4;

    useEffect(() => {
        const fetchPokemon = async () => {
          const offset = (page - 1) * limit;
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPokemon(data.results);
            setTotalPages(Math.ceil(data.count / limit));
          } catch (e) {
            setError(e.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchPokemon();
      }, [page, limit]);
    
      const handlePreviousClick = () => {
        if (page > 1) setPage(page - 1);
      };
    
      const handleNextClick = () => {
        if (page < totalPages) setPage(page + 1);
      };
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p className="error-message">Error fetching Pokemon: {error}</p>;
    
      return (
        <div className="PokemonListContainer">
          <div className="PokemonList">
            {pokemon.map((p) => {
              const id = p.url.split('/')[p.url.split('/').length - 2];
    
              return (
                <Link to={`/pokemon/${id}`} key={id} className="PokemonList-item">
                  {/* <span className="PokemonList-number">#{id}</span> */}
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={p.name}
                    loading="lazy"
                  />
                  <span className="PokemonList-name">{p.name}</span>
                </Link>
              );
            })}
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
          />
        </div>
      );
    };
    
    export default PokemonList;