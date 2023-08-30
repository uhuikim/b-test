import { StoreItem } from 'mocks/data'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import TableCell from './TableCell'
import { useQuery } from '@tanstack/react-query'
import { consultingKeys } from 'lib/queryKeyFactory'
import { getItem, searchItem } from 'lib/api/consulting'
import { AxiosResponse } from 'axios'

type Props = {
    headList: Array<string>
    handleDelete: (id: number) => void
    query: string
}

const Table = ({ headList, handleDelete, query }: Props) => {
    const { data } = useQuery<AxiosResponse, Error, StoreItem[]>(consultingKeys.list(), getItem, { enabled: !query })

    const { data: searchData } = useQuery<AxiosResponse, Error, StoreItem[]>(
        consultingKeys.search(query),
        () => searchItem(query),
        {
            enabled: !!query,
        },
    )

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    {headList.map((head) => (
                        <th key={head}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {query
                    ? searchData?.map((el) => <TableCell key={el.id} handleDelete={handleDelete} data={el} />)
                    : data?.map((el) => <TableCell key={el.id} handleDelete={handleDelete} data={el} />)}
            </tbody>
        </table>
    )
}

export default Table
