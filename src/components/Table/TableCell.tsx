import Button from 'components/Button'
import { StoreItem } from 'mocks/data'
import { useCallback, useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import modalState from 'recoil/modalState'

type Props = {
    data: StoreItem
    handleDelete: (id: number) => void
}

const TableCell = ({ data, handleDelete }: Props) => {
    const { id, placeName, name, phone, inboundSource, createdAt } = data

    return (
        <tr key={placeName + name}>
            <td>{placeName}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{inboundSource}</td>
            <td>{createdAt}</td>
            <td>
                <Button label='삭제' size='medium' onClick={() => handleDelete(id)} />
            </td>
        </tr>
    )
}

export default TableCell
