import React from 'react'
import style from './CheckBox.module.scss'
import { useFormContext } from 'react-hook-form'

export type Props = {
    id: string
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
}

const CheckBox = ({ id, label, onChange, checked, ...props }: Props) => {
    const { register } = useFormContext()

    return (
        <div className={style.wrap}>
            <input id={id} type='checkbox' checked={checked} className={style.checkbox} {...register(id)} {...props} />
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default CheckBox
