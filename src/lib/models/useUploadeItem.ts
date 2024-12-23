import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import { AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postItem } from 'lib/api/consulting'
import { consultingKeys } from 'lib/queryKeyFactory'

import { IFormInput } from 'components/Form/UploadForm'

const useUploadeItem = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const setModal = useSetRecoilState(modalState)

    const { mutate, isLoading } = useMutation<AxiosResponse, Error, IFormInput>((data) => postItem(data), {
        onSuccess: () => {
            navigate('/')
            queryClient.invalidateQueries(consultingKeys.list())
        },
        onError: () => {
            setModal((prev) => ({ ...prev, isMessageOpen: true, messageType: 'fail' }))
        },
    })

    return { mutate, isLoading }
}

export default useUploadeItem
