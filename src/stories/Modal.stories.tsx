import type { Meta, StoryObj } from '@storybook/react'
import { Button, ConfirmModal, MessageModal, ErrorModal } from 'components'
import { useRecoilState } from 'recoil'
import modalState from 'recoil/modalState'

const meta = {
    title: 'Component/Modal',
    component: MessageModal,
} satisfies Meta<typeof MessageModal>

export default meta

type Story = StoryObj<typeof meta>

const MessageModalWithButton = ({ ...args }) => {
    const [modal, setModal] = useRecoilState(modalState)

    const handleOnChange = () => {
        setModal((prev) => ({ ...prev, isMessageOpen: true }))
    }

    return (
        <>
            <Button onClick={handleOnChange} size='medium' bold label={'message modal'} />
            {modal.isMessageOpen && <MessageModal {...args} />}
        </>
    )
}

const ConfirmModalWithButton = ({ ...args }) => {
    const [modal, setModal] = useRecoilState(modalState)

    const handleOnChange = () => {
        setModal((prev) => ({ ...prev, isConfirmOpen: true }))
    }

    const onConfirm = () => {
        console.log('confirm')
    }

    return (
        <>
            <Button onClick={handleOnChange} size='medium' bold label={'confirm modal'} />
            {modal.isConfirmOpen && <ConfirmModal {...args} type='upload' onConfirm={onConfirm} />}
        </>
    )
}

const ErrorModalWithButton = ({ ...args }) => {
    const [modal, setModal] = useRecoilState(modalState)

    const handleOnChange = () => {
        setModal((prev) => ({ ...prev, isErrorOpen: true }))
    }

    const onConfirm = () => {
        console.log('confirm')
    }

    return (
        <>
            <Button onClick={handleOnChange} size='medium' bold label={'error modal'} />
            {modal.isErrorOpen && (
                <ErrorModal
                    {...args}
                    resetErrorBoundary={() => {
                        console.log('error')
                    }}
                />
            )}
        </>
    )
}

export const MessageModals: Story = {
    render: (args) => <MessageModalWithButton {...args} />,
    args: {
        message: '메세지 모달입니다.',
    },
}

export const ConfirmModals: Story = {
    render: (args) => <ConfirmModalWithButton {...args} />,
    args: {
        message: '확인 모달입니다.',
    },
}

export const ErrorModals: Story = {
    render: (args) => <ErrorModalWithButton {...args} />,
    args: {
        message: '에러 모달입니다.',
    },
}
