import style from './style.module.scss'

type Props = {
    text: string
    type: 'title' | 'body'
}

const Typography = ({ text, type }: Props) => {
    return <p className={style[type]}>{text}</p>
}

export default Typography
