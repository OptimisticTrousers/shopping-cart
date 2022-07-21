import {render, screen} from '@testing-library/react'
import ProductCard from '../components/ProductCard'

describe("ProductCard", () => {
    beforeAll(() => {
        
    })

    it("snapshot", () => {

        const {asFragment} = render(<ProductCard />)

        expect(asFragment()).toMatchSnapshot()
    })
})