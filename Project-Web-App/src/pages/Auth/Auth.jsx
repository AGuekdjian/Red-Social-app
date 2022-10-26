import React, { useState } from 'react'
import RegisterForm from '../../components/Auth/RegisterForm'
import "./Auth.scss"
import { Container, Image } from 'semantic-ui-react'
import logo from "../../assets/img/logo.png"
import LoginForm from '../../components/Auth/LoginForm'

export default function Auth() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Container fluid className='auth'>
            <Image src={logo} className="logo" />

            <div className='container-form'>
                {showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin} />}
            </div>

            <div className='change-form'>
                <p>
                    {showLogin ? (
                        <>
                            No tienes cuenta?
                            <span onClick={() => setShowLogin(!showLogin)}>Registrate</span>
                        </>
                    ) : (
                        <>
                            Entra con tu cuenta!
                            <span onClick={() => setShowLogin(!showLogin)}>Iniciar Sesion</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    )
}

