import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

global.React = React
global.fireEvent = fireEvent
global.render = render
