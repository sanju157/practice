import React, { lazy, useEffect } from 'react'
import { Form, Button,  Card, Row} from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// components 
const ErrorMsg = lazy(() => import('@components/ErrorMsg'))

// slices 
import { createUser, updateCreatedUserStatus, setError } from '@features/authSlice';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    reset
  } = useForm();
  const formValue = watch();

  const { isUserCreated, error } = useSelector((state) => state.auth)

  useEffect(() => {
    reset()
  }, [])

  useEffect(() => {
    if (isUserCreated) {
      navigate('/login');
      dispatch(updateCreatedUserStatus(false))
      dispatch(setError(null))
    }
  }, [isUserCreated])

  useEffect(() => {
    if (error) {
      window.alert(error)
      setTimeout(() => {
        dispatch(updateCreatedUserStatus(false))
        dispatch(setError(null))
      }, 1000);
    }
  }, [error])

  const onRegister = async() => {
    const data = formValue
    delete data.confirm_password
    dispatch(createUser(data))
    
  }

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Please enter valid email";
  };

  const matchPassword = (value) => {
    return (formValue.password === value) || "Password doesn't match";
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Card style={{ minWidth: '400px'}}>
        <Card.Body>
            <h3 className='mb-4 text-center'>Register</h3>
        <Form onSubmit={handleSubmit((data) => onRegister(data))}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Username" 
              {...register('username', { required: "Username is required." })} 
            />
            { errors?.username?.message && <ErrorMsg message={errors?.username.message} className="mt-2 small"/> } 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              {...register('email', 
                { 
                  required: "Email is required.", 
                  validate: validateEmail
                })
              } 
            />
            { errors?.email?.message && <ErrorMsg message={errors?.email?.message} className="mt-2 small"/> } 
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

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm password" 
              {...register('confirm_password', 
                { 
                  required: "Confirm Password is required.",
                  validate: matchPassword
                })
              } 
            />
            { errors?.confirm_password?.message && <ErrorMsg message={errors?.confirm_password?.message} className="mt-2 small"/> } 
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Row className='mt-2'>
            <Link to="/login" className='text-center'>Already register?</Link>
          </Row>
        </Form>
        </Card.Body> 
      </Card>
    </div>
  )
}
