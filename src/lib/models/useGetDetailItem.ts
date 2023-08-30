import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getDetailItem } from 'lib/api/consulting'
import { consultingKeys } from 'lib/queryKeyFactory'
import { StoreItem } from 'mocks/data'

const useGetDetailItem = (id: string) => {
    const { data, isSuccess } = useQuery<AxiosResponse, Error, StoreItem>(consultingKeys.detail(id), () =>
        getDetailItem(id),
    )

    return { data, isSuccess }
}

export default useGetDetailItem
