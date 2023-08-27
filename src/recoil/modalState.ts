import { atom } from 'recoil'

interface Props {
    isMessageOpen?: boolean
    isConfirmOpen?: boolean
    isErrorOpen?: boolean

    isConfirmed?: boolean
}

const initialState: Props = {
    isMessageOpen: false,
    isConfirmOpen: false,
    isErrorOpen: false,
    isConfirmed: false,
}

const modalState = atom({
    key: 'modalState',
    default: initialState,
})

export default modalState
