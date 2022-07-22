import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from '../components/Cart'
import {BrowserRouter} from 'react-router-dom'
import * as Store from '../context/Store'


describe("CartItem", () => {

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

    it("snapshot", () => {

        const {asFragment} = render(
            <BrowserRouter>
                <Store.CartProvider>
                    <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it("rendering 3 cart items in cart", () => {

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
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    quantity: 1,
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
                    quantity: 1,
                    rating: {
                    rate: 4.7,
                    count: 500
                    }
                }])

        render(
            <BrowserRouter>
                <Store.CartProvider>
                        <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const cartItems = screen.queryAllByTestId('product-quantity')

        expect(cartItems.length).toBe(3)
    })

    it("correctly calculating subtotal", () => {

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
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    quantity: 1,
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
                    quantity: 1,
                    rating: {
                    rate: 4.7,
                    count: 500
                    }
                }])

        render(
            <BrowserRouter>
                <Store.CartProvider>
                        <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const subTotal = screen.queryByTestId('subtotal')

        expect(Number(subTotal.textContent.slice(1)).toFixed(2)).toBe("188.24")
    })
    it("correctly calculating tax", () => {

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
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    quantity: 1,
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
                    quantity: 1,
                    rating: {
                    rate: 4.7,
                    count: 500
                    }
                }])

        render(
            <BrowserRouter>
                <Store.CartProvider>
                        <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const tax = screen.queryByTestId('tax')

        expect(Number(tax.textContent.slice(1)).toFixed(2)).toBe("9.41")
    })

    it("correctly calculating total", () => {

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
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    quantity: 1,
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
                    quantity: 1,
                    rating: {
                    rate: 4.7,
                    count: 500
                    }
                }])

        render(
            <BrowserRouter>
                <Store.CartProvider>
                        <Cart />
                </Store.CartProvider>
            </BrowserRouter>
        )

        const total = screen.queryByTestId('total')

        expect(Number(total.textContent.slice(1)).toFixed(2)).toBe("197.65")
    })


})