import React from 'react'

import cn from 'classnames'

import style from './Input.module.scss'
import { UseFormRegister, useFormContext } from 'react-hook-form'

export type Props = {
    id: string
    label?: string
    type?: 'text' | 'password' | 'number'
    value?: string | number
    placeholder?: string
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    readonly?: boolean
}

const Input = ({ id, label, type = 'text', value, placeholder, error, readonly = false, ...props }: Props) => {
    const { register } = useFormContext()
    return (
        <div>
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                className={cn(style.input, {
                    [style.input__error]: error,
                })}
                readOnly={readonly}
                {...props}
                {...register(id)}
            />
        </div>
    )
}
export default Input
