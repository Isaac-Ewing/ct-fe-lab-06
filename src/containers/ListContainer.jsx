import React, { useState, useEffect } from 'react';
import CharacterList from '../components/ACList.jsx';
import { useListStuff } from '../hooks/useListStuff.jsx';
import { getChars } from '../services/ACApi.jsx';

const ACContainer = () => {
  const { loading, characters } = useListStuff();

  if(loading) return <img id="spinner" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" />;

  return <CharacterList characters={characters} />;
};

export default ACContainer;
