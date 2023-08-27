import React from 'react'
import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useSetRecoilState } from 'recoil'

// 닫기 버튼

const MessageModal = () => {
    const setOpenModal = useSetRecoilState(modalState)

    return (
        <ModalPortal>
            <div></div>
        </ModalPortal>
    )
}

export default MessageModal
