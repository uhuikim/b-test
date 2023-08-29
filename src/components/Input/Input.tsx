import React from 'react'
import { useFormContext } from 'react-hook-form'

import cn from 'classnames'

import style from './Input.module.scss'

export type Props = {
    id: string
    label?: string
    type?: 'text' | 'number' | 'tel'
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
        setValue,
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
                {...register(id, {
                    onChange: (e) => {
                        const { value } = e.target
                        if (id === 'name' || id === 'note') {
                            setValue(id, value.replace(/^\s+|[^a-zA-Zㄱ-ㅎ가-힣\s]+/g, ''))
                        }
                        if (id === 'phone') {
                            setValue(
                                id,
                                value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
                            )
                        }
                    },
                    onBlur: (e) => {
                        const { value } = e.target
                        if (id === 'name' || 'note') {
                            setValue(id, value.replace(/\s+$/g, ''))
                        }
                    },
                })}
            />
            <p className={style.errorMessage}>{errors?.[id] && errors?.[id]?.message?.toString()}</p>
        </div>
    )
}
export default Input
