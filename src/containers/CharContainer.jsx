import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimalCrossingCharacter from '../components/ACCharacter';
import { useStuff } from '../hooks/useStuff';
import { getChars } from '../services/ACApi';

const AnimalCrossingCharacterContainer = () => {
  const { character, loading } = useStuff();
  console.log(character);

  if(loading)
    return <img id="spinner" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" />
  return (
    <AnimalCrossingCharacter {...character}/>
  );
};


export default AnimalCrossingCharacterContainer;
