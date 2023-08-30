import style from './style.module.scss'
import cn from 'classnames'

interface ButtonProps {
    type?: 'button' | 'submit'
    /** 버튼의 형태를 지정합니다 */
    variant?: 'contain' | 'outline'
    /** 버튼의 색을 지정합니다 */
    color?: 'primary' | 'error'
    /** 버튼의 사이즈를 지정합니다 */
    size?: 'small' | 'medium' | 'full'
    /** 버튼의 텍스트를 입력합니다 */
    label: string
    /** 버튼의 굵기를 설정합니다 */
    bold?: boolean
    /** 버튼의 활성화 여부를 설정합니다 */
    disabled?: boolean
    /** 버튼의 높이를 설정합니다 */
    height?: 'high' | 'medium'
    onClick?: () => void
}

const Button = ({
    size = 'small',
    color = 'primary',
    label,
    variant = 'contain',
    bold,
    type = 'button',
    height = 'medium',
    ...props
}: ButtonProps) => {
    const classNames = cn(style.button, {
        [style[`button__size__${size}`]]: size,
        [style[`button__height__${height}`]]: height,
        [style[`button__color__${color}`]]: variant === 'contain' && color,
        [style.button__outline]: variant === 'outline',
        [style.button__bold]: bold,
    })

    return (
        <button type={type} className={classNames} {...props}>
            {label}
        </button>
    )
}

export default Button
