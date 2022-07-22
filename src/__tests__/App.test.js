    
    import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App'
import Home from '../components/Home'
import Shop from '../components/Shop'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'

describe("App" , () => {

    beforeEach(() => {

        fetch.mockClear()

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
    })

    it('user can increment quantity', async () => {

        render(
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

        // Adding first product to cart
        await user.click(screen.queryByText("SHOP"))
        const firstProduct = await screen.findByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
        await user.click(firstProduct)
        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        // Adding second product to cart
        await user.click(screen.queryByText("SHOP"))
        const secondProduct = await screen.findByAltText('Mens Casual Premium Slim Fit T-Shirts')
        await user.click(secondProduct)
        await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        // Going to checkout
        const cartSVG = screen.getByTestId('cart-svg')
        await user.click(cartSVG)

        //Clicking quantity incrementor for first product only
        const [firstItemTitle] = await screen.findAllByRole('button', {name: "+"})
        await user.click(firstItemTitle)
        const firstItemQuantity = await screen.findAllByTestId('product-quantity')


        expect(firstItemQuantity).toBe("2")
    })
})
