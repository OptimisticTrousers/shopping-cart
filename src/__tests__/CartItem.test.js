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

})

    //test('user can increment quantity', async () => {

        //render(
            //<React.StrictMode>
                //<BrowserRouter>
                    //<Routes>
                        //<Route path="/" element={<App />} >
                            //<Route index element={<Home />} />
                            //<Route path="shop" element={<Shop />} />
                            //<Route path="shop/:id" element={<ProductDetail />} />
                            //<Route path="cart" element={<Cart />} />
                        //</Route>
                    //</Routes>
                //</BrowserRouter>
            //</React.StrictMode>
        //)

        //const user = userEvent.setup()

        //// Adding first product to cart
        //await user.click(screen.queryByText("SHOP"))
        //const firstProduct = await screen.findByAltText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
        //await user.click(firstProduct)
        //await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        //// Adding second product to cart
        //await user.click(screen.queryByText("SHOP"))
        //const secondProduct = await screen.findByAltText('Mens Casual Premium Slim Fit T-Shirts')
        //await user.click(secondProduct)
        //await user.click(screen.getByRole('button', {name: /Add to Cart/i}))

        //// Going to checkout
        //const cartSVG = screen.getByTestId('cart-svg')
        //await user.click(cartSVG)

        ////Clicking quantity incrementor for first product only
        //const [firstItemTitle] = await screen.findAllByRole('button', {name: "+"})
        //await user.click(firstItemTitle)
        //const firstItemQuantity = await screen.findAllByTestId('product-quantity')


        //expect(firstItemQuantity).toBe("2")
    //})