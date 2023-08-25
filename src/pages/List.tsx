import Button from 'components/Button'
import Typography from 'components/Typography'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useQuery } from 'react-query'

const List = () => {
    const { isLoading, error, data } = useQuery(consultingKeys.list(), () =>
        fetch('/api/inbound').then((res) => res.json()),
    )
    console.log(data, isLoading)

    return (
        <div>
            <Typography text='상담 인입 목록' type='title' />
            <Button />
        </div>
    )
}

export default List
