import React from 'react'
import {cleanup, getByAltText, getByTestId, render, screen, waitFor, waitForDomChange, waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from '../context/Store'
import App from '../App'
import Home from '../components/Home'
import Shop from '../components/Shop'


describe("CartItem", () => {

    beforeAll(() => {

            jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                id: 1
            }),
        }))
    })

    it('adding a product to cart', async () => {


        const {asFragment} = render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="shop/:id" element={<ProductDetail />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )

        const user = userEvent.setup()


        await user.click(screen.queryByText("SHOP"))
        

        //await waitFor(() => {
            //expect(screen.getByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument()

        //})

        const firstProduct = await screen.findByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')

        expect(firstProduct).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()


        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))
        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        const counter = screen.queryByTestId('quantity')

        expect(counter.textContent).toEqual("2")
        //expect(asFragment).toMatchSnapshot()

        //await waitForElementToBeRemoved(() => screen.queryByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'))
    })

})