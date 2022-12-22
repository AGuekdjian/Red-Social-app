import React, { useState, useEffect, useMemo } from 'react'
import { decodeToken, getToken } from './utils/token'
import AuthContext from './context/AuthContext'
import client from './config/apollo'
import { ApolloProvider } from '@apollo/client'
import Auth from "./pages/Auth"
import { ToastContainer } from "react-toastify"
import Navigation from './routes/Navigation'

function App() {
  const [auth, setAuth] = useState(undefined)
  // const [dataUser, setDataUser] = useState(undefined)

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setAuth(null)
    } else {
      setAuth(decodeToken(token))
    }
  }, [])

  const logout = () => {
    console.log("Cerrar sesion")
  }

  const setUser = (user) => {
    setAuth(user)
  }

  const authData = useMemo(() => ({ auth, logout, setUser }), [auth])

  if(auth === undefined) return null

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}

        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
      </AuthContext.Provider>
    </ApolloProvider>
  )
}

export default App
