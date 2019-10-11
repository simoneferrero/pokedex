import React, { Profiler } from 'react'
import styled from 'styled-components/macro'

import MainBody from './components/MainBody'
import { COLORS, SPACING } from './constants'
import { ReactComponent as Pokeball } from './icons/pokeball.svg'

const onRenderCallback = (...args) => {
  if (args.id !== 'app') {
    return
  }

  console.log(args)
}

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${COLORS.main};
  display: flex;
  flex-direction: column;
  height: ${SPACING.headerHeight}px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;

  > svg {
    height: 20px;
    width: auto;
  }

  > h3 {
    color: ${COLORS.background};
  }
`

const App = () => (
  <Profiler id="app" onRender={onRenderCallback}>
    <div>
      <StyledHeader>
        <Pokeball />
        <h3>Pokedex</h3>
      </StyledHeader>
      <MainBody />
    </div>
  </Profiler>
)

export default App
