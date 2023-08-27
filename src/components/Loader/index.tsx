import style from './style.module.scss'

const Loader = () => {
    return (
        <div className={style.container}>
            <div className={style.spinner} />
            <p>LOADING..</p>
        </div>
    )
}

export default Loader
