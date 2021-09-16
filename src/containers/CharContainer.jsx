import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimalCrossingCharacter from '../components/ACCharacter';
import { getChars } from '../services/ACApi';

const AnimalCrossingCharacterContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getChars(id)
      .then((character) => setCharacter(character))
      .then(() => setLoading(false));
  }, [id]);

  if(loading)
    return <img id="spinner" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" />
  return (
    <AnimalCrossingCharacter {...character}/>
  );
};


export default AnimalCrossingCharacterContainer;
