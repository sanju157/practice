import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import { search } from '@features/productSlice';

export default function ProductFilter() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
        // console.log("start searchng", searchText)
        dispatch(search(searchText))
    }, 1000);

    return () => clearTimeout(timeout); 
  }, [searchText]);

  return (
    <Row>
        <Col 
          sm={12} 
          // md={6} lg={8} xl={8} xxl={10}
        >
        
            <Form.Control
              type="text"
              id="search-txt"
              aria-describedby="search-text-input"
              onChange={(e) => setSearchText(e.target.value)}
            />
        </Col>
        {/* <Col sm={12} md={6} lg={4} xl={4} xxl={2}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col> */}
    </Row>
  )
}
