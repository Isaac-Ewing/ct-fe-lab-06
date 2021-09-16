import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AnimalCrossingCharacter = ({ id, name, quote, personality }) => (
  <>
    <Link to={`/${id}`}>{name}</Link>
    <p>{quote}</p>
    <p>{personality}</p>
  </>
);

AnimalCrossingCharacter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired
};

export default AnimalCrossingCharacter;
