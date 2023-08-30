import React from 'react'
import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useRecoilState, useSetRecoilState } from 'recoil'
import style from './ConfirmModal.module.scss'
import Button from 'components/Button'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

type Props = {
    message?: string
}

const MessageModal = ({ message }: Props) => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useRecoilState(modalState)
    const handleClose = () => {
        setOpenModal((prev) => ({ ...prev, isMessageOpen: false }))
    }

    const hadleCloseRedirect = () => {
        setOpenModal((prev) => ({ ...prev, isMessageOpen: false }))
        navigate('/')
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={openModal.messageType === 'fail' ? '#d92d20' : '#439D5C'} />

                <div className={style.content}>
                    <p>{message}</p>
                </div>

                <div className={style.footer}>
                    <Button
                        label='닫기'
                        variant='outline'
                        size='full'
                        onClick={openModal.messageType === 'fail' ? handleClose : hadleCloseRedirect}
                    />
                </div>
            </div>
        </ModalPortal>
    )
}

export default MessageModal
