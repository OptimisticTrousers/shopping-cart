import {render, screen} from '@testing-library/react'
import ProductCard from '../components/ProductCard'

describe("ProductCard", () => {
    beforeEach(() => {

        fetch.mockClear()

        fetch.mockResponseOnce(JSON.stringify())
    })

    const product = { 
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        price: 109.95, 
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        rating: { rate: 3.9, count: 120 }
    }

    it("snapshot", () => {

        const {asFragment} = render(<ProductCard image={product.image} rating={product.rating} title={product.title} price={product.price} />)

        expect(asFragment()).toMatchSnapshot()
    })
    it("ProductCard renders correctly when given props", () => {

        render(<ProductCard image={product.image} rating={product.rating} title={product.title} price={product.price} />)

        const productTitle = screen.queryByText(product.title)
        const productImage = screen.queryByAltText(product.title)
        const productRating = screen.queryByTestId('product-rating')
        const productPrice = screen.getByText(/\$/i)

        expect(productTitle.textContent).toBe(product.title)
        expect(productImage.src).toBe(product.image)
        expect(productRating.textContent).toBe(` ${product.rating.rate} (${product.rating.count} Reviews)`)
        expect(productPrice.textContent).toBe(`$${product.price}`)

    })
})