import Button from 'components/Button'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useQuery } from 'react-query'

const List = () => {
    const { isLoading, error, data } = useQuery(consultingKeys.list(), () =>
        fetch('/api/inbound').then((res) => res.json()),
    )
    console.log(data, isLoading)

    return (
        <div>
            상담 목록 페이지
            <Button />
        </div>
    )
}

export default List
