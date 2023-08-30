import React from 'react'
import cn from 'classnames'
import { useFormContext } from 'react-hook-form'

import style from './TextArea.module.scss'

export type Props = {
    id: string
    label?: string
    value?: string | number
    placeholder?: string
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    readonly?: boolean
    maxLength?: number
}

const TextArea = ({ id, label, value, placeholder, error, onChange, readonly, maxLength, ...props }: Props) => {
    const { register } = useFormContext()
    return (
        <div>
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                value={value}
                placeholder={placeholder}
                className={cn(style.textArea, {
                    [style.textArea__error]: error,
                })}
                readOnly={readonly}
                maxLength={maxLength}
                {...props}
                {...register(id)}
            />
        </div>
    )
}

export default TextArea
