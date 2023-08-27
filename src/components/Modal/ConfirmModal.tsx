import ModalPortal from './ModalPortal'
import modalState from 'recoil/modalState'
import { useSetRecoilState } from 'recoil'

import style from './ConfirmModal.module.scss'
import Button from 'components/Button'

import { AiOutlineExclamationCircle } from 'react-icons/ai'
type Props = { type: 'delete' | 'upload' }

const ConfirmModal = ({ type }: Props) => {
    const setModal = useSetRecoilState(modalState)

    const handleClose = () => {
        setModal((prev) => ({ ...prev, isConfirmOpen: false }))
    }
    const handleConfirm = () => {
        setModal((prev) => ({ ...prev, isConfirmed: true, isConfirmOpen: false }))
    }

    return (
        <ModalPortal>
            <div className={style.modal}>
                <AiOutlineExclamationCircle color={type === 'delete' ? '#d92d20' : '#439D5C'} />

                <div className={style.content}>
                    <p>{type === 'delete' ? '삭제' : '등록'}하시겠습니까?</p>
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
