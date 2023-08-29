import Typography from 'components/Typography'
import style from './style.module.scss'
import Form from 'components/Form'
import ErrorModal from 'components/Modal/ErrorModal'
import { useRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import { Suspense } from 'react'
import Spinner from 'components/Spinner'
import { QueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from 'components/Error/ErrorBoundary'
import MessageModal from 'components/Modal/MessageModal'

const Upload = () => {
    const [openModal, setOpenModal] = useRecoilState(modalState)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 등록' type='title' />
            </div>

            <Form />

            {openModal.isMessageOpen && <MessageModal />}
        </div>
    )
}

export default Upload
