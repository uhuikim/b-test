import { StoreItem } from 'mocks/data'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import TableCell from './TableCell'
import { useQuery } from '@tanstack/react-query'
import { consultingKeys } from 'lib/queryKeyFactory'
import { getItem } from 'lib/api/consulting'
import { AxiosResponse } from 'axios'

type Props = {
    headList: Array<string>
    handleDelete: (id: number) => void
}

const Table = ({ headList, handleDelete }: Props) => {
    const { data } = useQuery<AxiosResponse, Error, StoreItem[]>(consultingKeys.list(), getItem)

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    {headList.map((head) => (
                        <th key={head}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{data && data.map((el) => <TableCell key={el.id} handleDelete={handleDelete} data={el} />)}</tbody>
        </table>
    )
}

export default Table
