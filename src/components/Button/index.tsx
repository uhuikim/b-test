import style from './style.module.scss'
import cn from 'classnames'

type ButtonColors = 'primary' | 'error'

interface ButtonProps {
    /** 버튼의 형태를 지정합니다 */
    variant?: 'contain' | 'outline'
    /** 버튼의 색을 지정합니다 */
    color?: ButtonColors
    /** 버튼의 사이즈를 지정합니다 */
    size?: 'small' | 'medium' | 'half' | 'full'
    /** 버튼의 텍스트를 입력합니다 */
    label: string
    /** 버튼의 굵기를 설정합니다 */
    bold?: boolean
    disabled?: boolean
    onClick?: () => void
}

const Button = ({ size = 'small', color = 'primary', label, variant = 'contain', bold, ...props }: ButtonProps) => {
    const classNames = cn(style.button, {
        [style[`button__size__${size}`]]: size,
        [style[`button__color__${color}`]]: variant === 'contain' && color,
        [style.button__outline]: variant === 'outline',
        [style.button__bold]: bold,
    })

    return (
        <button type='button' className={classNames} {...props}>
            {label}
        </button>
    )
}

export default Button
