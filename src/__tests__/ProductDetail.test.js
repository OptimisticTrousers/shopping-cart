import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import ProductDetail from '../components/ProductDetail'
import * as Store from '../context/Store'
import {BrowserRouter} from 'react-router-dom'
import each from 'jest-each'

describe("ProductDetail", () => {

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
                <Store.CartProvider >
                    <ProductDetail />
                </Store.CartProvider>
            </BrowserRouter>
        )

        expect(asFragment()).toMatchSnapshot()
    })
    each([
        7,
        1,
        2,
        10,
        5,
        3 
    ]).it("expecting to call the 'Add to Cart' function in the cart context", async (userClicks) => {

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

        for(let i = 0; i < userClicks; i++){
            await user.click(addToCartButton)
        }

        expect(mockAddToCart).toHaveBeenCalledTimes(userClicks)
    })
})