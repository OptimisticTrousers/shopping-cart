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
import * as Store from '../context/Store';
import { act } from 'react-dom/test-utils';

describe('CartItem', () => {

    const product = { 
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        price: 109.95, 
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        rating: { rate: 3.9, count: 120 },
        quantity: 1,
    }

    const {title, price, image, rating, quantity, id} = product

    it('screenshot', () => {


        const {asFragment} = render(
            <BrowserRouter>
                <Store.CartProvider>
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity} id={id} />
                </Store.CartProvider>
            </BrowserRouter>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders correctly with props', () => {

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity} id={id}/>
                </Store.CartProvider>
            </BrowserRouter>
        )

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
    ]).it('correctly calls addToCart a certain amount of times', async (userClicks) => {

        const mockAddToCart = jest.fn()
        jest.spyOn(Store, 'useAddToCart').mockReturnValue(mockAddToCart)

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity} id={id}/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const incrementProductQuantityButton = screen.getByRole('button', {name: "+"})

        for(let i = 0; i < userClicks; i++){

            await user.click(incrementProductQuantityButton)
        }



        expect(mockAddToCart).toHaveBeenCalledTimes(userClicks)
        //const navQuantity = screen.queryByTestId('quantity')
        //expect(navQuantity.textContent).toBe(userClicks.toString())
        //const productQuantity = screen.queryByTestId('product-quantity')
        //expect(productQuantity.textContent).toBe(userClicks.toString())
    })
    each([
        2, 
        3,
        1,
        5,
        10,
        7
    ]).it('correctly calls reduceQuantity a certain number of times', async (initialQuantity) => {

        const mockReduceQuantity = jest.fn()
        jest.spyOn(Store, 'useReduceQuantity').mockReturnValue(mockReduceQuantity)

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={initialQuantity} id={id}/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const decrementProductQuantityButton = screen.getByRole('button', {name: "-"})

        for(let i = 0; i < initialQuantity; i++){

            await user.click(decrementProductQuantityButton)
        }

        expect(mockReduceQuantity).toHaveBeenCalledTimes(initialQuantity)
    })

    each([
        2, 
        3,
        1,
        5,
        10,
        7
    ]).it('correctly increments cartItem product quantity', async (userClicks) => {

        render(
            <BrowserRouter>
                <Store.CartProvider>
                    <CartItem title={title} price={price} image={image} rating={rating} quantity={quantity} id={id}/>
                </Store.CartProvider>
            </BrowserRouter>
        )

        const user = userEvent.setup()

        const incrementProductQuantityButton = screen.getByRole('button', {name: "+"})

        for(let i = 0; i < userClicks; i++){

            await user.click(incrementProductQuantityButton)
        }

        const productQuantity = await screen.findByText(userClicks.toString())
        expect(productQuantity.textContent).toBe(userClicks.toString())
    })
})

