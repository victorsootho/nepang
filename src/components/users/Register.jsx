import React, { useState } from 'react'
import '../../App.css'

const Register = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true)
    }

  return (
    <div className='flex flex-col w-72'>
        <label className='text-xs text-gray-600'>{label}</label>
        <input className='input p-4 my-2 mx-0 rounded' 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus}
        onFocus={() => 
            inputProps.name==='confirmPassword' && setFocused(true)}
        focused={focused.toString()} />
        <span className='text-xs p-1 text-red-700 hidden'>{errorMessage}</span>
    </div>
  )
}

export default Register