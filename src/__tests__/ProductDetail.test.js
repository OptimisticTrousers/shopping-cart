import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shop from '../components/Shop'
import ProductDetail from '../components/ProductDetail'
import {CartProvider}from '../context/Store'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'

it('the user incrementing the amount of items in the shopping cart', async () => {

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
            id: 1
        }),
        useRouteMatch: () => ({url: 'shop/1'})
    }))

    const user = userEvent.setup()

    render(
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <ProductDetail/>
            </CartProvider>
        </BrowserRouter>
    )

    await user.click(screen.getByRole('button', {name: /Add to Cart/i}))
    await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

    const counter = screen.queryByTestId('quantity')

    expect(counter.textContent).toEqual("2")
})