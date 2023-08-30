import Typography from 'components/Typography'
import style from './style.module.scss'
import Form from 'components/Form/UploadForm'
import { useRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import MessageModal from 'components/Modal/MessageModal'

const Upload = () => {
    const [openModal, setOpenModal] = useRecoilState(modalState)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 등록' type='title' />
            </div>

            <Form />

            {openModal.isMessageOpen && <MessageModal message='요청이 실패하였습니다.다시 시도해주세요.' />}
        </div>
    )
}

export default Upload
