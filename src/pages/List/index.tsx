import { Suspense, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'

import modalState from 'recoil/modalState'
import useDeleteItem from 'lib/models/useDeleteItem'

import {
    Button,
    Typography,
    Table,
    Spinner,
    ConfirmModal,
    ErrorModal,
    SearchInput,
    Divider,
    ErrorBoundary,
} from 'components'

import style from './style.module.scss'

const headList = [
    { id: 'placeName', value: '매장명' },
    { id: 'name', value: '이름' },
    { id: 'phone', value: '연락처' },
    { id: 'inboundSource', value: '인입경로' },
    { id: 'createdAt', value: '생성일' },
]

const List = () => {
    const [openModal, setOpenModal] = useRecoilState(modalState)
    const [deleteId, setDeleteId] = useState(0)
    const [query, setQuery] = useState('')
    const [tmpQuery, setTmpQuery] = useState(query)

    const { reset } = useQueryErrorResetBoundary()
    const navigate = useNavigate()
    const { mutate: deleteMutate } = useDeleteItem(deleteId)

    const handleAddClick = useCallback(() => {
        navigate('/upload')
    }, [])

    const handleDeleteClick = useCallback((id: number) => {
        setOpenModal((prev) => ({ ...prev, isConfirmOpen: true }))
        setDeleteId(id)
    }, [])

    const handleSearchQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTmpQuery(e.target.value)
    }, [])

    // useDeferredValue를 사용해보고 싶었는데, 429에러로 debounce로 변경
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
                <Button label='+ 추가' variant='contain' color='primary' height='high' bold onClick={handleAddClick} />
            </div>
            <SearchInput handleChange={handleSearchQuery} />
            <Divider />
            <ErrorBoundary onReset={reset} fallback={ErrorModal} message='상담 목록을 불러오는데 실패 하였습니다.'>
                <Suspense fallback={<Spinner />}>
                    <Table headList={headList} handleDelete={handleDeleteClick} query={query} />
                </Suspense>
            </ErrorBoundary>
            {openModal.isConfirmOpen && (
                <ConfirmModal type='delete' message='삭제하시겠습니까?' onConfirm={deleteMutate} />
            )}
        </div>
    )
}

export default List
