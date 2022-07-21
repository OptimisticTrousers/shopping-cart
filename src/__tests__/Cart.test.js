import React from 'react'
import {cleanup, fireEvent, render, screen, waitFor, waitForDomChange, waitForElementToBeRemoved} from '@testing-library/react'
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

        //window.fetch = jest.fn(() => {
            //return Promise.resolve({json: () => {
                //return Promise.resolve([{
                    //title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    //image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    //category: "men's clothing", 
                    //description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    //id: 1,
                    //price: 109.95,
                    //quantity: 1,
                    //rating: {
                        //rate: 3.9,
                        //count: 120
                    //}
                //}])
            //}})
        //})
    })

    it('adding a product to cart', async () => {


        const {asFragment} = render(
        <React.StrictMode>
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
        </React.StrictMode>
        )

        const user = userEvent.setup()


        await user.click(screen.queryByText("SHOP"))

        const firstProduct = await screen.findByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')

        await user.click(firstProduct)


        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        const cartSVG = screen.getByTestId('cart-svg')

        await user.click(cartSVG)

        const cartItemTitle = await screen.findByTestId('title-undefined')

        expect(cartItemTitle).toBeInTheDocument()

        //expect(asFragment()).toMatchSnapshot()

        //expect(cartItemTitle).toBeInTheDocument()

        //expect(asFragment).toMatchSnapshot()

        //await waitForElementToBeRemoved(() => screen.queryByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'))
    })

})