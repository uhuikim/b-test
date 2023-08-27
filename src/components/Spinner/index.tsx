import style from './style.module.scss'

const Spinner = () => {
    return (
        <div className={style.container}>
            <div className={style.spinner} />
            <p>LOADING..</p>
        </div>
    )
}

export default Spinner
