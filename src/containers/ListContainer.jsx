import React, { useState, useEffect } from 'react';
import CharacterList from '../components/ACList.jsx';
import { getChars } from '../services/ACApi.jsx';

const ACContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => { getChars()
    .then((characters) => setCharacters(characters))
    .finally(() => setLoading(false));
  }, []);

  if(loading) return <img id="spinner" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" />;

  return <CharacterList characters={characters} />;
};

export default ACContainer;
