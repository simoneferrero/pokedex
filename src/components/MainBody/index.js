import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import PokemonCard from '../PokemonCard'
import { pokemonList } from '../../constants/pokemonList'
import { SPACING } from '../../constants'

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: ${SPACING.base}px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: ${SPACING.headerHeight}px;
  padding: ${SPACING.base}px;
`

const MainBody = ({ pokemonList }) => {
  const [currentPokemon, setCurrentPokemon] = useState(null)

  const handleClick = (name) =>
    setCurrentPokemon(name !== currentPokemon ? name : null)

  return (
    <StyledWrapper data-testid="mainBody">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          {...pokemon}
          currentPokemon={currentPokemon}
          key={pokemon.id}
          setCurrentPokemon={handleClick}
        />
      ))}
    </StyledWrapper>
  )
}

MainBody.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
      weight: PropTypes.number.isRequired,
    })
  ),
}

MainBody.defaultProps = {
  pokemonList,
}

export default MainBody
