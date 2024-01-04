import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PokemonDetail.css';



const PokemonDetail = () => {
    const { pokemonId } = useParams();
    const navigate = useNavigate();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            if (!pokemonId) {
                console.error('No Pokemon ID is provided');
                return;
            }

            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
                console.log('Fetching from URL:', url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const details = await response.json();
                setPokemonDetails(details);
            } catch (e) {
                console.error('There was an error fetching the Pokémon details:', e);
                setError(e.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [pokemonId]);

    if (!pokemonId) return <p>No Pokémon ID provided.</p>;
    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error fetching details: {error}</p>;
    if (!pokemonDetails) return <p>Unable to load Pokémon details.</p>;

    return (
        <div className="pokemon-detail">
            <h1 className="pokemon-name">{pokemonDetails.name}</h1>
            <img
                className="pokemon-image"
                src={pokemonDetails.sprites.other['official-artwork'].front_default}
                alt={`Official artwork of ${pokemonDetails.name}`}
            />

            <div className="pokemon-info">
                <div className="pokemon-info-item">
                    <h2>Types</h2>
                    <ul>
                        {pokemonDetails.types.map((typeInfo) => (
                            <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="pokemon-info-item">
                    <h2>Abilities</h2>
                    <ul>
                        {pokemonDetails.abilities.map((abilityInfo) => (
                            <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="pokemon-info-item">
                    <h2>Stats</h2>
                    <ul>
                        {pokemonDetails.stats.map((statInfo) => (
                            <li key={statInfo.stat.name}>
                                {statInfo.stat.name}: {statInfo.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;