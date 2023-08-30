import { useRecoilValue } from 'recoil'
import modalState from 'recoil/modalState'
import { Typography, MessageModal, UploadForm } from 'components'

import style from './style.module.scss'

const Upload = () => {
    const modal = useRecoilValue(modalState)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 등록' type='title' />
            </div>

            <UploadForm />

            {modal.isMessageOpen && <MessageModal message='요청이 실패하였습니다.다시 시도해주세요.' />}
        </div>
    )
}

export default Upload
