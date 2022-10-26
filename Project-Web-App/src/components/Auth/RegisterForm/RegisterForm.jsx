import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useMutation } from '@apollo/client'
import { REGISTER } from "../../../gql/user"
import { toast } from 'react-toastify'

import { Form, Button } from "semantic-ui-react"
import "./RegisterForm.scss"

export default function RegisterForm(props) {
    const { setShowLogin } = props
    const [register] = useMutation(REGISTER)

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: validateSchema(),
        onSubmit: async (formData) => {
            try {
                const newUser = formData;
                delete newUser.repeatPassword

                await register({
                    variables: {
                        input: newUser,
                    }
                })
                toast.success('Usuario Registrado Correctamente!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setShowLogin(true)
            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                
            }
        }
    })

    return (
        <div className='register-form-container'>
            <Form className='register-form' onSubmit={formik.handleSubmit}>
                <h2 className='register-form-title'>Registrate para ver fotos y videos de tus amigos.</h2>
                <Form.Input type='text'
                    placeholder='Nombre y apellidos'
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name} />

                <Form.Input type='text'
                    placeholder='Nombre de usuario'
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username} />

                <Form.Input type='text'
                    placeholder='Correo electronico'
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email} />

                <Form.Input type='password'
                    placeholder='Contrasenia'
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password} />

                <Form.Input type='password'
                    placeholder='Repetir Contrasenia'
                    name="repeatPassword"
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                    error={formik.errors.repeatPassword} />

                <Button type='submit' className='btn-submit'>Registrarse</Button>
            </Form>
        </div>
    )
}

function initialValue() {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    }
}

function validateSchema() {
    return Yup.object({
        name: Yup.string().required(true),
        username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacios").required(true),
        email: Yup.string().email("El email no es valido").required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], "Las contrasenias no coinciden")
    })
}