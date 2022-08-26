import React, { useState } from 'react'
import Register from './users/Register'
import '../App.css'

const FormInput = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    })

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: "Username should be 4-16 characters and shouldn't include any special characters!",
            label: 'Username',
            pattern: "^[A-Za-z0-9]{4,16}$",
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: "Email address should be valid!",
            label: 'Email',
            required: true
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: "Password should be 8-20 characters and include a letter, a number, and a special character",
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Password doesn't match",
            label: 'Confirm Password',
            pattern: values.password,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    

    console.log(values);
    return (
    <div className='app flex items-center justify-center h-screen'>
        <form className='bg-white py-0 px-14' onSubmit={handleSubmit}>
            <h2 className='text-pink-900 text-center'>Register</h2>
            {inputs.map((input) => (
                <Register 
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={onChange} />
            ))}
            <button className='w-full h-12 p-2 bg-purple-600 hover:bg-purple-900 text-white rounded font-bold text-lg cursor-pointer mt-4 mb-8'>Submit</button>
        </form>
    </div>
  )
}

export default FormInput