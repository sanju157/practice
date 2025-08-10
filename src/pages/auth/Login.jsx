import React, { lazy, useEffect } from 'react'
import { Form, Button, Card, Row} from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, setError } from '@features/authSlice';

// components 
const ErrorMsg = lazy(() => import('@components/ErrorMsg'))

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
      register,
      handleSubmit,
      formState: { errors, isDirty },
      watch,
      reset
  } = useForm();

  const { error, isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (error) {
          window.alert(error)
          setTimeout(() => {
            dispatch(setError(null))
          }, 1000);
        }
  }, [error])

  const onLogin = (data) => {
    console.log("on Login:::", data)
    dispatch(loginUser(data))
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Card style={{ minWidth: '400px'}}>
        <Card.Body>
            <h3 className='mb-4 text-center'>Login</h3>
        <Form onSubmit={handleSubmit((data) => onLogin(data))}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Username" 
              {...register('username', { required: "Username is required." })} 
            />
            { errors?.username?.message && <ErrorMsg message={errors?.username.message} className="mt-2 small"/> } 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              {...register('password', { required: "Password is required." })} 
            />
            { errors?.password?.message && <ErrorMsg message={errors?.password?.message} className="mt-2 small"/> } 
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Row className='mt-2'>
            <Link to="/register" className='text-center'>Can't Login?</Link>
          </Row>
        </Form>
        </Card.Body> 
      </Card>
    </div>
  )
}
