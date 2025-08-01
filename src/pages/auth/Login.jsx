import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUser, setLoader } from '@features/auth/authSlice'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading } = useSelector((state) => state.auth)



  const defaultForm = {
    email: "",
    password: ""
  }
  const [forms, setForms] = useState(defaultForm)

  console.log("forms", forms)

  const handleSubmit = () => {
    const token = "hello@token";
    const data = {
      token: token,
      userInfo: {
        ...forms
      }
    }
    
    dispatch(setLoader(true))
    setTimeout(() => {
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(data.userInfo))
      dispatch(setUser(data))
      dispatch(setLoader(false)) 
      navigate('/')
    }, 2000);
    console.log("on submit::::")
  }

  const onChange = (key, value) => {
    setForms((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  
  return (
    <div>
      <div>
        {
          loading && <h3>submitting form</h3>
        }
        <input type="email" onChange={(e) => onChange("email", e.target.value)}/>
        <input type="password" onChange={(e) => onChange("password", e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
