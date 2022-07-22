import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as Store from '../context/Store'
import Navbar from '../components/Navbar'
import ProductDetail from '../components/ProductDetail'
import each from 'jest-each'
import CartItem from '../components/CartItem'
import Cart from '../components/Cart'
import App from '../App'
import Shop from '../components/Shop'

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
    ]).it('correctly increments total cart quantity from cart', async (userClicks) => {

        Store.useCart = jest.fn(() => [{
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    quantity: 1,
                    rating: {
                    rate: 3.9,
                    count: 120
                    }
                }])

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Navbar />
                    <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const incrementProductQuantityButton = await screen.findByRole('button', {name: "+"})

        for(let i = 0; i < userClicks; i++){

            await user.click(incrementProductQuantityButton)
        }

        const navQuantity = screen.queryByTestId('quantity')
        expect(navQuantity.textContent).toBe(userClicks.toString())
    })
    each([
        2, 
        3,
        1,
        5,
        10,
        7
    ]).it('correctly decrements total cart quantity from cart', async (initialQuantity) => {

        fetch.mockResponseOnce(JSON.stringify([{
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
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    rating: {
                    rate: 4.1,
                    count: 259
                    }
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    rating: {
                    rate: 4.7,
                    count: 500
                    }
                }]))
       
        render(
            <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
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
        

        for(let i = 0; i < initialQuantity; i++){

            await user.click(screen.getByRole('button', {name: /Add to Cart/i}))
        }

        const cartSVG = screen.getByTestId('cart-svg')
        await user.click(cartSVG)

        const decrementProductQuantityButton = await screen.findByRole('button', {name: "-"})

        for(let i = 0; i < initialQuantity; i++){

            await user.click(decrementProductQuantityButton)
        }


        const navQuantity = screen.queryByTestId('quantity')

        expect(navQuantity.textContent).toBe("1")
    })
})