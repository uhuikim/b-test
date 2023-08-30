import Button from 'components/Button'
import Typography from 'components/Typography'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useMutation, useQueryClient, useQueryErrorResetBoundary } from '@tanstack/react-query'
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import Table from 'components/Table'
import Spinner from 'components/Spinner'
import modalState from 'recoil/modalState'
import { useRecoilState } from 'recoil'
import ConfirmModal from 'components/Modal/ConfirmModal'
import ErrorModal from 'components/Modal/ErrorModal'
import SearchInput from 'components/Input/SearchInput'
import Divider from 'components/Divider/Divider'
import { deleteItem } from 'lib/api/consulting'
import { Suspense, useDeferredValue, useEffect, useState, useTransition } from 'react'
import ErrorBoundary from 'components/Error/ErrorBoundary'

// const headList = [
//     { id: 'placeName', value: '매장명' },
//     { id: 'name', value: '이름' },
//     { id: 'phone', value: '연락처' },
//     { id: 'inboundSource', value: '인입경로' },
//     { id: 'createdAt', value: '생성일' },
// ]

const headList = ['매장명', '성명', '연락처', '인입경로', '생성일', '']

const List = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const [openModal, setOpenModal] = useRecoilState(modalState)
    const [deleteId, setDeleteId] = useState(0)
    const [query, setQuery] = useState('')
    const [tmpQuery, setTmpQuery] = useState(query)

    const { mutate: deleteMutate } = useMutation(() => deleteItem(deleteId), {
        onSuccess: () => {
            queryClient.invalidateQueries(consultingKeys.list())
        },
    })

    const { reset } = useQueryErrorResetBoundary()
    const handleClick = () => {
        navigate('/upload')
    }

    const handleDelete = (id: number) => {
        setOpenModal((prev) => ({ ...prev, isConfirmOpen: true }))
        setDeleteId(id)
    }

    function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
        setTmpQuery(e.target.value)
    }

    // const deferredQuery = useDeferredValue(query)
    // search debounce
    useEffect(() => {
        const debounce = setTimeout(() => {
            return setQuery(tmpQuery)
        }, 500)
        return () => clearTimeout(debounce)
    }, [tmpQuery])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='상담 인입 목록' type='title' />
                <Button label='+ 추가' variant='contain' color='primary' height='high' bold onClick={handleClick} />
            </div>
            <SearchInput handleChange={handleQuery} />
            <Divider />
            <ErrorBoundary onReset={reset} fallback={ErrorModal} message='상담 목록을 불러오는데 실패 하였습니다.'>
                <Suspense fallback={<Spinner />}>
                    <Table headList={headList} handleDelete={handleDelete} query={query} />
                </Suspense>
            </ErrorBoundary>
            {openModal.isConfirmOpen && <ConfirmModal type='delete' onConfirm={deleteMutate} />}
        </div>
    )
}

export default List
