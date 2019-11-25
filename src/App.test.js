import App from './App'

describe('Given `App`', () => {
  it('should render correctly', async () => {
    const { findByTestId, getByText } = render(<App />)
    const mainBody = await findByTestId('mainBody')

    expect(getByText('Pokedex')).toBeInTheDocument()
    expect(mainBody).toBeInTheDocument()
  })
})
