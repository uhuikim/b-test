import React from 'react'
import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useSetRecoilState } from 'recoil'

// api 에러 발생시 다시 시도하기 모달
const ErrorModal = () => {
    const setOpenModal = useSetRecoilState(modalState)

    return (
        <ModalPortal>
            <div></div>
        </ModalPortal>
    )
}

export default ErrorModal
