import TableCell from './TableCell'
import useGetList from 'lib/models/useGetList'

import style from './style.module.scss'

type Props = {
    headList: Array<{ id: string; value: string }>
    handleDelete: (id: number) => void
    query: string
}

const Table = ({ headList, handleDelete, query }: Props) => {
    const { data, searchData } = useGetList(query)

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    {headList.map((head) => (
                        <th key={head.id}>{head.value}</th>
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
