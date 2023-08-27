import React from 'react'
import cn from 'classnames'
import style from './TextArea.module.scss'
export type Props = {
    id?: string
    label?: string
    name?: string
    value?: string | number
    placeholder?: string
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    readonly?: boolean
}

const TextArea = ({ id, label, name, value, placeholder, error, onChange, readonly, ...props }: Props) => {
    return (
        <div>
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                className={cn(style.textArea, {
                    [style.textArea__error]: error,
                })}
                onChange={onChange}
                readOnly={readonly}
                {...props}
            />
        </div>
    )
}

export default TextArea
