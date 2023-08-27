import Button from 'components/Button'
import { StoreItem } from 'mocks/data'

import style from './style.module.scss'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
    headList: Array<string>
    data: StoreItem[]
}
const Table = ({ headList, data }: Props) => {
    const navigate = useNavigate()
    console.log(`**************data***************:${data} `)
    console.log(data)
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
                            <tr key={placeName + name} onClick={() => navigate(`/detail/${id}`)}>
                                <td>{placeName}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{inboundSource}</td>
                                <td>{createdAt}</td>
                                <td>
                                    <Button label='삭제' size='medium' />
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table
