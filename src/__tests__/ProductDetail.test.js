import React, { useContext, useState } from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shop from '../components/Shop'
import ProductDetail from '../components/ProductDetail'
import * as Store from '../context/Store'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'

describe("ProductDetail", () => {

    beforeAll(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                id: 1
            }),
            useRouteMatch: () => ({url: 'shop/1'})
        }))
    })
    it("expecting to call the 'Add to Cart' function in the cart context", async () => {

        const DummyContext = React.createContext()

        const DummyCartProvider = jest.fn(({children}) => {

            const [dummyCart, setDummyCart] = useState([])

            return (
                <DummyContext.Provider value={dummyCart}>
                    {children}
                </DummyContext.Provider>
            )
        })

        const mockAddToCart = jest.fn()
        jest.spyOn(Store, 'useAddToCart').mockReturnValue(mockAddToCart)



        render(
            <BrowserRouter>
                <Store.CartProvider >
                    <ProductDetail />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const addToCartButton = await screen.findByRole('button', {name: /Add to Cart/i})

        const user = userEvent.setup()

        await user.click(addToCartButton)
        await user.click(addToCartButton)
        await user.click(addToCartButton)
        await user.click(addToCartButton)
        await user.click(addToCartButton)
        await user.click(addToCartButton)
        await user.click(addToCartButton)

        expect(mockAddToCart).toHaveBeenCalledTimes(7)
    })
    it.skip('the user incrementing the amount of items in the shopping cart', async () => {


        const user = userEvent.setup()

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Navbar />
                    <ProductDetail/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))
        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        const counter = screen.queryByTestId('quantity')

        expect(counter.textContent).toEqual("2")
    })

})