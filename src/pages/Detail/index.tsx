import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import modalState from 'recoil/modalState'
import { MessageModal, Spinner, DeatailForm, Typography } from 'components'

import style from './style.module.scss'

const Detail = () => {
    const modal = useRecoilValue(modalState)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='서빙로봇 상담인입 상세' type='title' />
            </div>
            <Suspense fallback={<Spinner />}>
                <DeatailForm />
            </Suspense>

            {modal.isMessageOpen && <MessageModal message='삭제되었습니다' />}
        </div>
    )
}

export default Detail
