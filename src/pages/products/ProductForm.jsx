import React, { useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { useGetProductCategoryQuery, useCreateProductMutation, useGetProductByIDQuery, useUpdateProductMutation } from '@api/product'

export default function ProductForm({ product_id }) {

  console.log("product_id::", product_id)
    const { data: category } = useGetProductCategoryQuery()
    const [createProduct, craProdRes] = useCreateProductMutation();
    const [updateProduct, updateProdRes] = useUpdateProductMutation();
    const {data: product} = useGetProductByIDQuery(product_id)

    console.log("product:::", product)

    // console.log("category:::", category)

    const {
          register,
          handleSubmit,
          formState: { errors, isDirty },
          watch,
          reset,
          setValue
    } = useForm();
    const formValue = watch();

    console.log("formValue:::", formValue)

    useEffect(() => {
      console.log("is loading update::", craProdRes.isLoading)
      if (!craProdRes.isLoading) {
        reset()
      }
    }, [craProdRes.isLoading])

    useEffect(() => {
      if (product) {

        setValue('title', product.title)
        setValue('price', product.price)
        setValue('description', product.description)
        setValue('category', product.category)
      }
    }, [product])

    const onSubmit = async(data) => {

      console.log("on submit::product form", data)
      const formdata = new FormData();
      formdata.append('title', formValue.title)
      formdata.append('price', formValue.price)
      formdata.append('description', formValue.description)
      formdata.append('category', formValue.category)
      formdata.append('image', formValue.image[0])

      if (product_id) {
        console.log("on Update product data", formValue)
        // window.alert(formValue)
        await updateProduct(product_id, formdata).unwrap();
      } else {
        console.log("on Create product data", formValue)
        // window.alert(formValue)
        await createProduct(formdata).unwrap();
      }
    }

  return (
    
    <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" {...register('title', { required: "Title is required." })} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" {...register('price', { required: "Price is required." })} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="textarea" placeholder="Description" {...register('description', { required: "Description is required." })} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example" {...register('category', { required: "Category is required." })}>
                  <option value="">Select</option>
                  {
                      category?.map((cat, index) => (<option key={`${cat}-${index}`} value={cat}>{ cat }</option>))
                  }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control 
                type="file" 
                placeholder="Image Picker" 
                // {...register('image', { required: "Image is required." })}
                {...register('image', { required: false })}
              />
            </Form.Group>
          
            <Button variant="primary" type="submit" disabled={craProdRes.isLoading || updateProdRes.isLoading}>
              Save
            </Button>
          
        </Form>
    </Row>
  )
}
