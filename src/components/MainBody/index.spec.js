import MainBody from './'
import { fireEvent } from '@testing-library/dom'

describe('Given `MainBody`', () => {
  const pokemonList = [
    {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
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
      id: 7,
      name: 'squirtle',
      height: 5,
      weight: 90,
      types: ['water'],
    },
  ]
  const defaultProps = {
    pokemonList,
  }
  const renderComponent = (props = {}) =>
    render(<MainBody {...defaultProps} {...props} />)

  it('should render a list of pokemon names and their details when clicked on', () => {
    const { getByText, queryByText } = renderComponent()

    pokemonList.forEach(({ height, name, weight, types }) => {
      const pokemonName = getByText(new RegExp(name, 'i'))

      expect(pokemonName).toBeInTheDocument()

      expect(queryByText(`${height / 10}m`)).not.toBeInTheDocument()
      expect(queryByText(`${weight / 10}kg`)).not.toBeInTheDocument()
      types.forEach((type) => {
        expect(queryByText(new RegExp(type, 'i'))).not.toBeInTheDocument()
      })

      fireEvent.click(pokemonName)

      expect(getByText(`${height / 10}m`)).toBeInTheDocument()
      expect(getByText(`${weight / 10}kg`)).toBeInTheDocument()
      types.forEach((type) => {
        expect(getByText(new RegExp(type, 'i'))).toBeInTheDocument()
      })
    })
  })

  it('should correctly open and close pokemon details on click', () => {
    const { getByText, getByTestId, queryByTestId } = renderComponent()
    const charmanderTitle = getByText(new RegExp('charmander', 'i'))

    expect(queryByTestId(/pokemonDetails-bulbasaur/)).not.toBeInTheDocument()

    fireEvent.click(getByText(new RegExp('bulbasaur', 'i')))

    expect(getByTestId(/pokemonDetails-bulbasaur/)).toBeInTheDocument()

    fireEvent.click(charmanderTitle)

    expect(queryByTestId(/pokemonDetails-bulbasaur/)).not.toBeInTheDocument()
    expect(getByTestId(/pokemonDetails-charmander/)).toBeInTheDocument()

    fireEvent.click(charmanderTitle)

    expect(queryByTestId(/pokemonDetails-charmander/)).not.toBeInTheDocument()
  })
})
