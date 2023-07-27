import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <div>
        <NavLink to="/sign-in">
        <Login>Login</Login>
        </NavLink>
        <Logout>Logout</Logout>
    </div>
  )
}

export default Header

const Logout = styled.div``

const Login = styled.div``