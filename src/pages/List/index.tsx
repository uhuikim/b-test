import Button from 'components/Button'
import Typography from 'components/Typography'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useQuery } from 'react-query'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import Table from 'components/Table'
import Spinner from 'components/Spinner'
import modalState from 'recoil/modalState'
import { useRecoilState } from 'recoil'
import ConfirmModal from 'components/Modal/ConfirmModal'
import MessageModal from 'components/Modal/MessageModal'
import ErrorModal from 'components/Modal/ErrorModal'

// const headList = [
//     { id: 'placeName', value: '매장명' },
//     { id: 'name', value: '이름' },
//     { id: 'phone', value: '연락처' },
//     { id: 'inboundSource', value: '인입경로' },
//     { id: 'createdAt', value: '생성일' },
// ]

const headList = ['매장명', '성명', '연락처', '인입경로', '생성일', '']

const List = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useRecoilState(modalState)
    const { isLoading, error, data } = useQuery(consultingKeys.list(), () =>
        fetch('/api/inbound')
            .then((res) => res.json())
            .catch((error) => {
                throw error
            }),
    )

    const handleClick = () => {
        navigate('/upload')
    }
    const handleDelete = () => {
        setOpenModal((prev) => ({ ...prev, isConfirmOpen: true }))
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='상담 인입 목록' type='title' />
                <Button label='+ 추가' variant='contain' color='primary' bold onClick={handleClick} />
            </div>

            {isLoading ? <Spinner /> : <Table headList={headList} data={data} handleDelete={handleDelete} />}
            {openModal.isConfirmOpen && <ConfirmModal type='delete' />}
            {openModal.isMessageOpen && <MessageModal />}
            {openModal.isErrorOpen && <ErrorModal />}
        </div>
    )
}

export default List
