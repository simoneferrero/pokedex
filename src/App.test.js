import App from './App'

describe('Given `App`', () => {
  it('should render correctly', () => {
    const { getByTestId, getByText } = render(<App />)

    expect(getByText('Pokedex')).toBeInTheDocument()
    expect(getByTestId('mainBody')).toBeInTheDocument()
  })
})
