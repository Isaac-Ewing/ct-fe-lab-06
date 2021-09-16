import React from 'react';
import PropTypes from 'prop-types';
import AnimalCrossingCharacter from './ACCharacter';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      <li key={character.name}>
        <AnimalCrossingCharacter
          id={character.id}
          name={character.name}
          quote={character.quote}
          personality={character.personality}
        />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
    })
  ).isRequired,
};
  
export default CharacterList;
