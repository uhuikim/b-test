import Button from 'components/Button'
import { StoreItem } from 'mocks/data'

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
    headList: Array<string>
    data: StoreItem[]
    handleDelete: () => void
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
                {data.length !== 0 &&
                    data.map((el) => {
                        const { id, placeName, name, phone, inboundSource, createdAt } = el

                        return (
                            <tr key={placeName + name}>
                                <td>{placeName}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{inboundSource}</td>
                                <td>{createdAt}</td>
                                <td>
                                    <Button label='삭제' size='medium' onClick={handleDelete} />
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table
