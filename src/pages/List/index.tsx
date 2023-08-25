import Button from 'components/Button'
import Typography from 'components/Typography'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useQuery } from 'react-query'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import Table from 'components/Table'

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
    const { isLoading, error, data } = useQuery(consultingKeys.list(), () =>
        fetch('/api/inbound').then((res) => res.json()),
    )

    const handleClick = () => {
        navigate('/upload')
    }

    console.log(data, isLoading)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography text='상담 인입 목록' type='title' />
                <Button label='+ 추가' variant='contain' color='primary' bold onClick={handleClick} />
            </div>
            <Table headList={headList} data={data} />
        </div>
    )
}

export default List
