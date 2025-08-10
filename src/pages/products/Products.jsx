import React, { lazy, useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { PencilSquare, TrashFill, EyeFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

// component 
const ProductFilter = lazy(() => import('@pages/products/ProductFilter'))
const ProductDetails = lazy(() => import('@pages/products/ProductDetails'))
const CustomModal = lazy(() => import('@components/CustomModal'))
const ProductForm = lazy(() => import('@pages/products/ProductForm'))

// api 
import { useGetProductsQuery, useDeleteProductMutation} from '@api/product';


// hooks 
import useAuthenticated from '@hooks/useAuthenticated';


export default function Products() {
    const { searchText } = useSelector((state) => state.products)
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [deleteProductMut, { isLoading: deleteLoader }] = useDeleteProductMutation() 
    const isAuthenticated = useAuthenticated()

    const defaultModal = { open: false, id: null }
    const defaultProductModal = { open: false, editMode: false, id: null }
    const defaultDeleteConfModal = { open: false, id: null }

    const [openModal, setOpenModal] = useState(defaultModal)
    const [openProduct, setOpenProduct] = useState(defaultProductModal)
    const [deleteProduct, setDeleteProduct] = useState(defaultDeleteConfModal)

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            width: '300px',
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Description',
            selector: row => row.description,
            width: '300px',
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Action',
            selector: row => (
                <div>
                    <Button 
                        variant='' 
                        style={{ border: 'none' }}
                        onClick={() => setOpenModal((prev) => ({...prev, open: true, id: row.id}))}
                    >
                        <EyeFill />
                    </Button>
                    <Button 
                        variant='' 
                        style={{ border: 'none' }}
                        disabled={!isAuthenticated}
                        onClick={() => setOpenProduct((prev) => ({...prev, open: true, editMode: true, id: row.id}))}
                    >
                        <PencilSquare />
                    </Button>
                    <Button 
                        variant='' 
                        style={{ border: 'none' }}
                        disabled={!isAuthenticated}
                        onClick={() => setDeleteProduct((prev) => ({...prev, open: true, id: row.id}))}
                    >
                        <div className='text-danger'>
                            <TrashFill />
                        </div>
                    </Button>
                </div>
            ),
            right: "true"
        },
    ];

    const handleCloseProdDet = useCallback(() => {
        setOpenModal(defaultModal)
    }, [])

    const handleCloseProductForm = useCallback(() => {
        setOpenProduct(defaultProductModal)
    }, [])

    const handleCloseProdDelete = useCallback(() => {
        setDeleteProduct(defaultDeleteConfModal)
    }, [])

    const onDelete = useCallback(() => {
        // console.log("on delete:::", deleteProduct)
        deleteProductMut(deleteProduct.id)
        setDeleteProduct(defaultDeleteConfModal)
    }, [deleteProduct])
    
    const filtProd = products?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <>

    <CustomModal 
        open={deleteProduct.open}
        onClose={handleCloseProdDelete}
        title="Delete product"
        secondaryAction={{
            active: true,
            onAction: handleCloseProdDelete
        }}
        primaryAction={{
            active: true,
            content:  deleteLoader ? "..." : "Delete" ,
            variant: 'danger',
            onAction: onDelete
        }}
        body={
            <>
                <p>Are you sure you want to delete this product? You can't revert it letter.</p>
            </>
        }
    />
    <CustomModal 
        open={openModal.open}
        onClose={handleCloseProdDet}
        title="Product details"
        secondaryAction={{
            active: true,
            onAction: handleCloseProdDet
        }}
        body={
            <>
                <ProductDetails id={openModal?.id}/>
            </>
        }
    />

    <CustomModal
        // size="lg" 
        open={openProduct.open}
        onClose={handleCloseProductForm}
        title={`${openProduct.editMode ? 'Update' : 'Create new'} Product`}
        footer={false}
        secondaryAction={{
            active: true,
            onAction: handleCloseProductForm
        }}
        body={
            <>
                <ProductForm product_id={ openProduct.editMode ? openProduct.id : null}/>
            </>
        }
    />
    

    <Container>
        <Row className='my-5'>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
                <h3>Product</h3>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex justify-content-end'>
            {
                isAuthenticated &&
                <Button onClick={() => setOpenProduct((prev) => ({...prev, open: true}))}>
                    Create
                </Button>
            }
            </Col>
        </Row>
        <Row className='my-5'>
            <Col>
                <ProductFilter />
            </Col>
        </Row>
        <Row>
            <Col>
                <DataTable
		        	columns={columns}
		        	data={ filtProd }
                    responsive
		        />
            </Col>
        </Row>
    </Container>
    </>
  )
}
