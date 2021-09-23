import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getChars } from '../services/ACApi';

export const useStuff = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState();
  const [character, setCharacter] = useState();
  
  useEffect(() => {
    setLoading(true);
    getChars(id)
      .then((character) => setCharacter(character))
      .then(() => setLoading(false));
  }, [id]);
  return { character, loading };
};
