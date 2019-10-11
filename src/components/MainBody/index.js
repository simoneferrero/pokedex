import React from 'react'
import styled from 'styled-components/macro'

import PokemonCard from '../PokemonCard'
import { SPACING } from '../../constants'

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: ${SPACING.base}px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: ${SPACING.headerHeight}px;
  padding: ${SPACING.base}px;
`
const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    types: ['grass', 'poison'],
  },
  {
    id: 2,
    name: 'ivysaur',
    height: 10,
    weight: 130,
    types: ['grass', 'poison'],
  },
  {
    id: 3,
    name: 'venusaur',
    height: 20,
    weight: 1000,
    types: ['grass', 'poison'],
  },
  {
    id: 4,
    name: 'charmander',
    height: 6,
    weight: 85,
    types: ['fire'],
  },
  {
    id: 5,
    name: 'charmeleon',
    height: 11,
    weight: 190,
    types: ['fire'],
  },
  {
    id: 6,
    name: 'charizard',
    height: 17,
    weight: 905,
    types: ['fire', 'flying'],
  },
  {
    id: 7,
    name: 'squirtle',
    height: 5,
    weight: 90,
    types: ['water'],
  },
  {
    id: 8,
    name: 'wartortle',
    height: 10,
    weight: 225,
    types: ['water'],
  },
  {
    id: 9,
    name: 'blastoise',
    height: 16,
    weight: 855,
    types: ['water'],
  },
]

class MainBody extends React.Component {
  state = {
    currentPokemon: null,
  }

  render() {
    const { currentPokemon } = this.state
    const setCurrentPokemon = (pokemon) =>
      this.setState({ currentPokemon: pokemon })
    return (
      <StyledWrapper>
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

export default MainBody
