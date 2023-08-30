import cn from 'classnames'

import style from './style.module.scss'

type Props = {
    dim?: boolean
}
const Spinner = ({ dim }: Props) => {
    return (
        <div
            className={cn({
                [style.dim]: dim,
            })}
        >
            <div className={style.container}>
                <div className={style.spinner} />
                <p>LOADING..</p>
            </div>
        </div>
    )
}

export default Spinner
