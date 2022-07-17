import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Navbar from '../Navbar'

it("renders navbar", () => {

    const {asFragment} = render(<Navbar />)

    expect(asFragment()).toMatchSnapshot()
})