import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const navigate = useNavigate()
    const { setIsAuth } = useContext(AuthContext)

    const logout = () => {
      localStorage.removeItem('user')
       navigate('/')
       setIsAuth(false)
    }

    return { logout }
}