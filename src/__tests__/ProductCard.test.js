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

        const {image, rating, title, price} = product

        render(<ProductCard image={image} rating={rating} title={title} price={price} />)

        const productTitle = screen.queryByText(title)
        // Querying an image which has the same alt text as the title
        const productImage = screen.queryByAltText(title)
        const productRating = screen.queryByTestId('product-rating')
        const productPrice = screen.getByText(/\$/i)

        expect(productTitle.textContent).toBe(title)
        expect(productImage.src).toBe(image)
        expect(productRating.textContent).toBe(` ${rating.rate} (${rating.count} Reviews)`)
        expect(productPrice.textContent).toBe(`$${price}`)
    })
})