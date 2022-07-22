import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import CartItem from '../components/CartItem';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'
import Navbar from '../components/Navbar'
import each from 'jest-each'
import { CartProvider } from '../context/Store';

describe('CartItem', () => {

    const product = { 
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        price: 109.95, 
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        rating: { rate: 3.9, count: 120 },
        quantity: 1,
    }

    it('screenshot', () => {
        const {asFragment} = render(<CartItem />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders correctly with props', () => {

        const {title, price, image, rating, quantity} = product

        render(<CartItem title={title} price={price} image={image} rating={rating} quantity={quantity}/>)

        const productTitle = screen.queryByText(title)
        // Querying an image which has the same alt text as the title
        const productImage = screen.queryByAltText(title)
        const productQuantity = screen.queryByTestId('product-quantity')
        const [productPrice] = screen.queryAllByText(/\$/i)

        expect(productTitle.textContent).toBe(title)
        expect(productImage.src).toBe(image)
        expect(productQuantity.textContent).toBe(quantity.toString())
        expect(productPrice.textContent).toBe(`$${price}`)

    })

    each([
        2, 
        3,
        1,
        5,
        10,
        7
    ]).it('correctly increments total cart quantity', async (userClicks) => {

        const {title, price, image, rating, quantity} = product

        render(
            <BrowserRouter>
                <CartProvider>
                    <Navbar /> 
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity}/>
                </CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const incrementProductQuantityButton = screen.getByRole('button', {name: "+"})

        for(let i = 0; i < userClicks; i++){

            await user.click(incrementProductQuantityButton)
        }

        const productQuantity = screen.queryByTestId('product-quantity')

        const navQuantity = screen.queryByTestId('quantity')

        expect(navQuantity.textContent).toBe(userClicks.toString())
        expect(navQuantity.textContent).toBe(productQuantity.textContent)
    })

})

