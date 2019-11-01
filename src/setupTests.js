import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

global.React = React
global.fireEvent = fireEvent
global.render = render

global.afterEach(() => {
  jest.clearAllMocks()
})
global.afterAll(() => {
  jest.resetAllMocks()
})
