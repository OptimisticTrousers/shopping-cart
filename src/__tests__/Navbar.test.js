import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import * as Store from '../context/Store'
import Navbar from '../components/Navbar'
import ProductDetail from '../components/ProductDetail'
import each from 'jest-each'
import CartItem from '../components/CartItem'

describe("Navbar", () => {
    beforeAll(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                id: 1
            }),
        }))

    })

    beforeEach(() => {

        fetch.mockClear()

        fetch.mockResponseOnce(JSON.stringify({
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                    rate: 3.9,
                    count: 120
                    }
                }))
    })

    const product = { 
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        price: 109.95, 
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        rating: { rate: 3.9, count: 120 },
        quantity: 1,
    }

    const {title, price, image, rating, quantity, id} = product

    it("snapshot", () => {
        const {asFragment} = render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Navbar />
                </Store.CartProvider>
            </BrowserRouter>
        )

        expect(asFragment()).toMatchSnapshot()
    })
    each([
        7,
        1,
        2,
        5,
        10,
        3
    ]).it('the user incrementing the amount of items in the shopping cart from product page', async (userClicks) => {

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Navbar />
                    <ProductDetail/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        for(let i = 0; i < userClicks; i++){

            await user.click(screen.getByRole('button', {name: /Add to Cart/i}))
        }

        const counter = screen.queryByTestId('quantity')

        expect(counter.textContent).toEqual(userClicks.toString())
        expect(fetch).toHaveBeenCalledTimes(1)
    })
        each([
        2, 
        3,
        1,
        5,
        10,
        7
    ]).it('correctly increments total cart quantity', async (userClicks) => {

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Navbar />
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity} id={id}/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const decrementProductQuantityButton = screen.getByRole('button', {name: "-"})

        for(let i = 0; i < userClicks; i++){

            await user.click(decrementProductQuantityButton)
        }

        const navQuantity = screen.queryByTestId('quantity')
        expect(navQuantity.textContent).toBe("1")
    })
})