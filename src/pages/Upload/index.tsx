import Typography from 'components/Typography'
import style from './style.module.scss'
import Input from 'components/Input/Input'
import Form from 'components/Form'

const Upload = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 등록' type='title' />
            </div>
            <Form />
        </div>
    )
}

export default Upload
