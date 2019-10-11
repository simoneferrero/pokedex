import styled, { css } from 'styled-components/macro'

import { COLORS, SPACING } from '../../constants'

const BORDER = `${SPACING.border}px solid ${COLORS.border}`

export const StyledPokemonCard = styled.div`
  border: ${BORDER};
  border-radius: 5px;
  max-width: 400px;
  text-align: center;
  width: 100%;

  span {
    font-size: 0.8rem;
    margin-left: 5px;
  }

  :hover {
    box-shadow: 2px 2px 10px ${COLORS.border};
  }
`
export const StyledName = styled.button`
  background-color: ${COLORS.main};
  border: none;
  color: ${COLORS.background};
  cursor: pointer;
  font-weight: 700;
  padding: ${SPACING.base}px;
  position: relative;
  width: 100%;

  :focus {
    outline: none;
  }

  :active {
    background-color: ${COLORS.secondary};
  }
`
export const StyledDetails = styled.div`
  border-top: ${BORDER};
  display: grid;
  grid-gap: ${SPACING.base / 2}px;
  grid-template-areas:
    'image height types'
    'image weight types';
  padding: ${SPACING.base}px;
`
export const StyledImage = styled.img`
  grid-area: image;
  height: 60px;
  width: 60px;
`
const centeredFlexStyles = css`
  align-items: center;
  display: flex;
`
export const StyledHeight = styled.div`
  ${centeredFlexStyles}
  grid-area: height;
`
export const StyledWeight = styled.div`
  ${centeredFlexStyles}
  grid-area: weight;
`
export const StyledTypes = styled.div`
  ${centeredFlexStyles}
  grid-area: types;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const StyledBallButton = styled.div`
  background-color: ${COLORS.background};
  border: ${BORDER};
  border-radius: 100%;
  bottom: 0;
  height: 20px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, calc(50% + ${SPACING.border}px / 2));
  width: 20px;
`
