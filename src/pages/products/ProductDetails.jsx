import React from 'react'
import { useGetProductByIDQuery } from '@api/product';

export default function ProductDetails({ id }) {
    const { data: product } = useGetProductByIDQuery(id)
    // console.log("get product by id", data)
    console.log("get product by id", product)
  return (
    <div>{ JSON.stringify(product) }</div>
  )
}
