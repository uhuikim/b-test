import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getItem, searchItem } from 'lib/api/consulting'
import { consultingKeys } from 'lib/queryKeyFactory'
import { StoreItem } from 'mocks/data'

const useGetList = (query: string) => {
    const { data } = useQuery<AxiosResponse, Error, StoreItem[]>(consultingKeys.list(), getItem, {
        enabled: !query,
    })

    const { data: searchData } = useQuery<AxiosResponse, Error, StoreItem[]>(
        consultingKeys.search(query),
        () => searchItem(query),
        {
            enabled: !!query,
        },
    )

    return { data, searchData }
}

export default useGetList
