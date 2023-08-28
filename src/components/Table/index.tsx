import { StoreItem } from 'mocks/data'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import TableCell from './TableCell'

type Props = {
    headList: Array<string>
    data: StoreItem[]
    handleDelete: (id: number) => void
}
const Table = ({ headList, data, handleDelete }: Props) => {
    const navigate = useNavigate()

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
                {data.length !== 0 && data.map((el) => <TableCell key={el.id} handleDelete={handleDelete} data={el} />)}
            </tbody>
        </table>
    )
}

export default Table
