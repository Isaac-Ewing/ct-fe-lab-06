import { useState, useEffect } from 'react';
import { getChars } from '../services/ACApi';

export const useListStuff = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => { getChars()
    .then((characters) => setCharacters(characters))
    .then(() => setLoading(false));
  }, []);
  console.log(loading);
  return { characters, loading };
};
