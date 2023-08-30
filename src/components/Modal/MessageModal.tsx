import { useRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import ModalPortal from './ModalPortal'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

import style from './ConfirmModal.module.scss'

type Props = {
    message?: string
}

const MessageModal = ({ message }: Props) => {
    const navigate = useNavigate()
    const [modal, setModal] = useRecoilState(modalState)
    const handleClose = () => {
        setModal((prev) => ({ ...prev, isMessageOpen: false }))
    }

    const hadleCloseRedirect = () => {
        setModal((prev) => ({ ...prev, isMessageOpen: false }))
        navigate('/')
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={modal.messageType === 'fail' ? '#d92d20' : '#439D5C'} />

                <div className={style.content}>
                    <p>{message}</p>
                </div>

                <div className={style.footer}>
                    <Button
                        label='닫기'
                        variant='outline'
                        size='full'
                        onClick={modal.messageType === 'fail' ? handleClose : hadleCloseRedirect}
                    />
                </div>
            </div>
        </ModalPortal>
    )
}

export default MessageModal
