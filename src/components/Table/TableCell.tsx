import Button from 'components/Button'
import { StoreItem } from 'mocks/data'
import { useNavigate } from 'react-router-dom'

type Props = {
    data: StoreItem
    handleDelete: (id: number) => void
}

const TableCell = ({ data, handleDelete }: Props) => {
    const navigate = useNavigate()
    const { id, placeName, name, phone, inboundSource, createdAt } = data

    return (
        <tr key={placeName + name} onClick={() => navigate(`/detail/${id}`)}>
            <td>{placeName}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{inboundSource}</td>
            <td>{createdAt}</td>
            <td style={{ zIndex: 999 }}>
                <Button
                    label='삭제'
                    size='medium'
                    onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(id)
                    }}
                />
            </td>
        </tr>
    )
}

export default TableCell
