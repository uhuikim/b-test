import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useSetRecoilState } from 'recoil'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

import { Button } from 'components'

import style from './ConfirmModal.module.scss'

type Props = { type: 'delete' | 'upload'; onConfirm: () => void; message: string }

const ConfirmModal = ({ type, onConfirm, message }: Props) => {
    const setModal = useSetRecoilState(modalState)

    const handleClose = () => {
        setModal((prev) => ({ ...prev, isConfirmOpen: false }))
    }

    const handleConfirm = () => {
        onConfirm()
        setModal((prev) => ({ ...prev, isConfirmOpen: false }))
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={type === 'delete' ? '#d92d20' : '#439D5C'} />

                <div className={style.content}>
                    <p>{message}</p>
                </div>

                <div className={style.footer}>
                    <Button label='취소' variant='outline' size='full' onClick={handleClose} />
                    <Button
                        label={type === 'delete' ? '삭제' : '등록'}
                        size='full'
                        color={type === 'delete' ? 'error' : 'primary'}
                        onClick={handleConfirm}
                    />
                </div>
            </div>
        </ModalPortal>
    )
}

export default ConfirmModal
