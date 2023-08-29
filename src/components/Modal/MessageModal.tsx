import React from 'react'
import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useRecoilState, useSetRecoilState } from 'recoil'
import style from './ConfirmModal.module.scss'
import Button from 'components/Button'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const MessageModal = () => {
    const [openModal, setOpenModal] = useRecoilState(modalState)
    const handleClose = () => {
        setOpenModal((prev) => ({ ...prev, isMessageOpen: false }))
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={openModal.messageType === 'fail' ? '#d92d20' : '#439D5C'} />

                <div className={style.content}>
                    <p>
                        {openModal.messageType === 'fail'
                            ? '요청이 실패하였습니다.다시 시도해주세요.'
                            : '요청이 성공하였습니다.'}
                    </p>
                </div>

                <div className={style.footer}>
                    <Button label='닫기' variant='outline' size='full' onClick={handleClose} />
                </div>
            </div>
        </ModalPortal>
    )
}

export default MessageModal
