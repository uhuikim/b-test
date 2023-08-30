import Typography from 'components/Typography'
import style from './style.module.scss'
import { useRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import MessageModal from 'components/Modal/MessageModal'
import DeatailForm from 'components/Form/DeatailForm'
import { Suspense } from 'react'
import Spinner from 'components/Spinner'

const Detail = () => {
    const [openModal, setOpenModal] = useRecoilState(modalState)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 상세' type='title' />
            </div>
            <Suspense fallback={<Spinner />}>
                <DeatailForm />
            </Suspense>

            {openModal.isMessageOpen && <MessageModal message='삭제되었습니다' />}
        </div>
    )
}

export default Detail
