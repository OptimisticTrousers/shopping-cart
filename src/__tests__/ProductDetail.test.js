import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shop from '../components/Shop'
import ProductDetail from '../components/ProductDetail'
import * as Store from '../context/Store'
import {BrowserRouter} from 'react-router-dom'
import Navbar from '../components/Navbar'

describe("ProductDetail", () => {

    beforeAll(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                id: 1
            }),
        }))
    })
    it("snapshot", () => {
        const {asFragment} = render(
            <BrowserRouter>
                <Store.CartProvider >
                    <ProductDetail />
                </Store.CartProvider>
            </BrowserRouter>
        )

        expect(asFragment()).toMatchSnapshot()
    })
    it("expecting to call the 'Add to Cart' function in the cart context", async () => {

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
    

})