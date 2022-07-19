import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shop from '../components/Shop';

it("renders navbar", () => {

    const {asFragment} = render(<Shop/>)

    expect(asFragment()).toMatchSnapshot()
})