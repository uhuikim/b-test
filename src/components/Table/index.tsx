import Button from 'components/Button'
import { StoreItem } from 'mocks/data'

import style from './style.module.scss'

type Props = {
    headList: Array<string>
    data: StoreItem[]
}
const Table = ({ headList, data }: Props) => {
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
                {data &&
                    data.map((el) => {
                        const { placeName, name, phone, inboundSource, createdAt } = el

                        return (
                            <tr key={placeName + name}>
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
