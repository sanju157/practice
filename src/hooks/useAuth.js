import React from 'react'
import { useSelector } from 'react-redux'

export default function useAuth() {
    const { isAuthenticated } = useSelector(state => state.auth)
    return isAuthenticated
}
