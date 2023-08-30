import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { getItem } from 'lib/api/consulting'
import { consultingKeys } from 'lib/queryKeyFactory'
import { StoreItem } from 'mocks/data'

const useGetList = (query: string) => {
    const { data } = useQuery<AxiosResponse, Error, StoreItem[]>(consultingKeys.list(), getItem, { enabled: !query })

    return data
}

export default useGetList
