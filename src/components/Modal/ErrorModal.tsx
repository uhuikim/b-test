import { useSetRecoilState } from 'recoil'
import modalState from 'recoil/modalState'

import ModalPortal from './ModalPortal'
import { Button } from 'components'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

import style from './ConfirmModal.module.scss'

type Props = {
    error?: Error | null
    resetErrorBoundary: () => void
    message?: string
}

const ErrorModal = ({ error, resetErrorBoundary, message }: Props) => {
    const setModal = useSetRecoilState(modalState)

    const handleClose = () => {
        setModal((prev) => ({ ...prev, isErrorOpen: false }))
        resetErrorBoundary()
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={'#d92d20'} />

                <div className={style.content}>
                    <p>{message}</p>
                </div>

                <div className={style.footer}>
                    <Button label='다시 시도하기' variant='contain' color='error' size='full' onClick={handleClose} />
                </div>
            </div>
        </ModalPortal>
    )
}

export default ErrorModal
