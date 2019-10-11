import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledPokemonCard,
  StyledName,
  StyledDetails,
  StyledImage,
  StyledHeight,
  StyledWeight,
  StyledTypes,
  StyledBallButton,
} from './styled'
import { SPRITES_URL } from '../../constants'

const transformToUpperCase = (string) =>
  string[0].toUpperCase() + string.slice(1)

const PokemonCard = ({
  currentPokemon,
  height,
  id,
  name,
  setCurrentPokemon,
  types,
  weight,
}) => (
  <StyledPokemonCard>
    <StyledName onClick={() => setCurrentPokemon(name)}>
      {name.toUpperCase()}
      <StyledBallButton />
    </StyledName>
    {currentPokemon === name && (
      <StyledDetails>
        <StyledImage alt={name} src={`${SPRITES_URL}${id}.png`} />
        <StyledHeight>
          <h5>Height</h5>
          <span>{height / 10}m</span>
        </StyledHeight>
        <StyledWeight>
          <h5>Weight</h5>
          <span>{weight / 10}kg</span>
        </StyledWeight>
        <StyledTypes>
          <h5>Types</h5>
          <div>
            {types.map((type) => (
              <span key={type}>{transformToUpperCase(type)}</span>
            ))}
          </div>
        </StyledTypes>
      </StyledDetails>
    )}
  </StyledPokemonCard>
)

PokemonCard.propTypes = {
  currentPokemon: PropTypes.string,
  height: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  setCurrentPokemon: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  weight: PropTypes.number.isRequired,
}

export default PokemonCard
