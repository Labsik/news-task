import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack'


interface ILoginData {
    name: string
    password: string
}

export const useLogin = () => {
    const { setIsAuth } = useContext(AuthContext)

    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const login = (loginData: ILoginData) => {
        if (loginData.name === 'admin' && loginData.password === '12345') {
            localStorage.setItem('user', JSON.stringify(loginData))
            setIsAuth(true)
            navigate('/profile')
          }
          else {
            setIsAuth(false)
            enqueueSnackbar('Wrong data. Please, try again!', {
              variant: 'error',
            })
          }
    }

    return { login }
}