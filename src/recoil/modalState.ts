import { atom } from 'recoil'

interface Props {
    isMessageOpen?: boolean
    isConfirmOpen?: boolean
    isErrorOpen?: boolean
}

const initialState: Props = {
    isMessageOpen: false,
    isConfirmOpen: false,
    isErrorOpen: false,
}

const modalState = atom({
    key: 'modalState',
    default: initialState,
})

export default modalState
