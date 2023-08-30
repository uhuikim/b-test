import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { deleteItem } from 'lib/api/consulting'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useSetRecoilState } from 'recoil'
import modalState from 'recoil/modalState'

const useDeleteItem = (id: number, messageType?: string) => {
    const queryClient = useQueryClient()
    const setModal = useSetRecoilState(modalState)

    const { mutate, isLoading } = useMutation<AxiosResponse, Error>(() => deleteItem(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(consultingKeys.list())

            if (messageType) setModal((prev) => ({ ...prev, isMessageOpen: true, messageType: messageType }))
        },
    })

    return { mutate, isLoading }
}

export default useDeleteItem
