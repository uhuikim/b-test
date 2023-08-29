import { atom } from 'recoil'

interface Props {
    isMessageOpen?: boolean
    isConfirmOpen?: boolean
    isErrorOpen?: boolean

    messageType?: string
}

const initialState: Props = {
    isMessageOpen: false,
    isConfirmOpen: false,
    isErrorOpen: false,
    messageType: '',
}

const modalState = atom({
    key: 'modalState',
    default: initialState,
})

export default modalState
