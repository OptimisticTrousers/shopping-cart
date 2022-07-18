import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ProductDetail(props){

    const params = useParams()

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    })

    console.log(details)

    return (
        <div>
            <h1>{details.title}</h1>
            <p>{details.price}</p>
            <p>{details.category}</p>
            <p>{details.description}</p>
            <img src={details.image} alt={details.description}/>
            <button type="button">Add to Cart</button>
        </div>
    )
}