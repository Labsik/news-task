import React, {useState} from 'react'
import { useLogin } from '../../hooks'

export const LoginForm = () => {
  const { login } = useLogin()

const [loginData, setLoginData] = useState({name: '', password: ''})
const {name, password} = loginData


const handleInput =  (e: React.ChangeEvent<HTMLInputElement>) => {
 setLoginData({ ...loginData, [e.target.id]: e.target.value })
}

const submitLogin = (e: React.FormEvent<HTMLFormElement>)=> {
  e.preventDefault()
  login(loginData)
  setLoginData({name: '', password: '',})
}

const isDisabled = name === '' || password === ''

  return (
    <>
     <form onSubmit={submitLogin}>
        <input type='text' id='name' placeholder='name' value={name} onChange={e => handleInput(e)} />
        <input type='password' id='password' placeholder='password' value={password}  onChange={e => handleInput(e)}  />
        <button type='submit' disabled={isDisabled}>Login</button>
    </form>
    </>
  )
}
