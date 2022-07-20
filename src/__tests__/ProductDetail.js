import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shop from '../components/Shop'
import ProductDetail from '../components/ProductDetail'
import {CartQuantityProvider}from '../context/QuantityContext'

it('the user incrementing the amount of items in the shopping cart', async () => {

    const user = userEvent.setup()

    render(<CartQuantityProvider><ProductDetail/></CartQuantityProvider>)

    await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

    const counter = screen.getByRole('span', {name: "quantity"})

    expect(counter).toEqual(1)
})