import { useState, useEffect } from 'react';
import { getChars } from '../services/ACApi';

export const useListStuff = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => { getChars()
    .then((characters) => setCharacters(characters))
    .finally(() => setLoading(false));
  }, []);
  return { characters, loading };
};
