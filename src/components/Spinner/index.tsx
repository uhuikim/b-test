import cn from 'classnames'

import style from './style.module.scss'
interface Props {
    /** dim 처리 유무를 지정합니다 */
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
