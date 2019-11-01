import React from 'react'
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

class MainBody extends React.Component {
  state = {
    currentPokemon: null,
  }

  render() {
    const { currentPokemon } = this.state
    const { pokemonList } = this.props
    const setCurrentPokemon = (pokemon) =>
      this.setState({ currentPokemon: pokemon })

    return (
      <StyledWrapper data-testid="mainBody">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            {...pokemon}
            currentPokemon={currentPokemon}
            key={pokemon.id}
            setCurrentPokemon={setCurrentPokemon}
          />
        ))}
      </StyledWrapper>
    )
  }
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
