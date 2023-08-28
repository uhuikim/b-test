import React from 'react'
import { useFormContext } from 'react-hook-form'

import cn from 'classnames'

import style from './Input.module.scss'

export type Props = {
    id: string
    label?: string
    type?: 'text' | 'password' | 'number'
    value?: string | number
    placeholder?: string
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    readonly?: boolean
    maxLength?: number
}

const Input = ({
    id,
    label,
    type = 'text',
    value,
    placeholder,
    error,
    readonly = false,
    maxLength,
    ...props
}: Props) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

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
                maxLength={maxLength}
                {...props}
                {...register(id)}
            />
            <p className={style.errorMessage}>{errors?.[id] && errors?.[id]?.message?.toString()}</p>
        </div>
    )
}
export default Input
