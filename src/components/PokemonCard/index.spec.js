import PokemonCard from './'

describe('Given `PokemonCard`', () => {
  const pokemon = {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    types: ['grass', 'poison'],
  }
  const currentPokemon = null
  const setCurrentPokemon = jest.fn()
  const defaultProps = {
    ...pokemon,
    currentPokemon,
    setCurrentPokemon,
  }
  const renderComponent = (props = {}) =>
    render(<PokemonCard {...defaultProps} {...props} />)

  it('should render correctly when collapsed', () => {
    const { getByText, queryByText } = renderComponent()

    expect(getByText('BULBASAUR')).toBeInTheDocument()
    expect(
      queryByText(`pokemonDetails-${pokemon.name}`)
    ).not.toBeInTheDocument()
  })

  it('should render correctly when NOT collapsed', () => {
    const modifiedProps = {
      currentPokemon: pokemon.name,
    }
    const { getByText } = renderComponent(modifiedProps)

    expect(getByText('BULBASAUR')).toBeInTheDocument()
    expect(getByText(/height/i)).toBeInTheDocument()
    expect(getByText('0.7m')).toBeInTheDocument()
    expect(getByText(/weight/i)).toBeInTheDocument()
    expect(getByText('6.9kg')).toBeInTheDocument()
    expect(getByText(/types/i)).toBeInTheDocument()
    expect(getByText('Grass')).toBeInTheDocument()
    expect(getByText('Poison')).toBeInTheDocument()
  })

  it('should call `setCurrentPokemon` when the user clicks on the name', () => {
    const { getByText } = renderComponent()

    fireEvent.click(getByText('BULBASAUR'))

    expect(setCurrentPokemon).toHaveBeenCalledWith('bulbasaur')
  })
})
