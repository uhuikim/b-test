import style from './CheckBox.module.scss'

export type Props = {
    id?: string
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
}

const CheckBox = ({ id, label, onChange, checked }: Props) => {
    return (
        <div className={style.wrap}>
            <input
                id={id}
                type='checkbox'
                checked={checked}
                className={style.checkbox}
                onChange={(e) => {
                    console.log(e.target.checked)
                }}
            />
            <label className={style.label} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default CheckBox
