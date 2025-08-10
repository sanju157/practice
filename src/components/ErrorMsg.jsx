import React from 'react'

export default function  ErrorMsg({ message="", className="" }) {
  return (
    <div className={`text-danger ${className}`}>*{ message }</div>
  )
}
