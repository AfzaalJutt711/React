import React, { useId } from 'react'

const Input = React.forwardRef(function Input({ type = 'text', label, ...props }, ref) {

    const id = useId()
    return (
        <div className="input">
            <label htmlFor={id}>{label}: </label>
            <input
                id={id}
                type={type}
                ref={ref}
                {...props}
            />
        </div>
    )
})

export default Input
