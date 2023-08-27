import React from 'react'

import cn from 'classnames'

import style from './Input.module.scss'

export type Props = {
    id?: string
    label?: string
    type?: 'text' | 'password' | 'number'
    name?: string
    value?: string | number
    placeholder?: string
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    readonly?: boolean
}

const Input = ({
    id,
    label,
    type = 'text',
    name,
    value,
    placeholder,
    error,
    onChange,
    readonly = false,
    ...props
}: Props) => {
    return (
        <div>
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={cn(style.input, {
                    [style.input__error]: error,
                })}
                onChange={onChange}
                readOnly={readonly}
                {...props}
            />
        </div>
    )
}
export default Input
