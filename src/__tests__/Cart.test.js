import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Cart from '../components/Cart'

it("renders navbar", () => {

    const {asFragment} = render(<Cart />)

    expect(asFragment()).toMatchSnapshot()
})