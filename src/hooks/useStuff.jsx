import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getChars } from '../services/ACApi';

export const useStuff = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    getChars(id)
      .then((character) => setCharacter(character))
      .then(() => setLoading(false));
  }, [id]);
  return { character, loading };
};
