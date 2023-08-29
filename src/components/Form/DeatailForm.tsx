import Button from 'components/Button'
import Input from 'components/Input/Input'
import SelectBox from 'components/Input/SelectBox'
import TextArea from 'components/Input/TextArea'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import style from './style.module.scss'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getDetailItem, postItem } from 'lib/api/consulting'
import { useNavigate, useParams } from 'react-router-dom'
import { consultingKeys } from 'lib/queryKeyFactory'
import { useSetRecoilState } from 'recoil'
import modalState from 'recoil/modalState'
import { AxiosResponse } from 'axios'
import { StoreItem } from 'mocks/data'

export interface IFormInput {
    inboundSource?: string
    name: string
    phone?: string | null
    placeName: string
    note?: string
    agreement: boolean
}

const DeatailForm = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const setModal = useSetRecoilState(modalState)

    const methods = useForm<IFormInput>({
        defaultValues: {
            inboundSource: '',
            name: '',
            phone: '',
            placeName: '',
            note: '',
            agreement: false,
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('dkdkdk')
    }

    const { id } = useParams()

    const { data } = useQuery<AxiosResponse, Error, StoreItem>(consultingKeys.detail(id), () => getDetailItem(id), {
        onSuccess: (data) => {
            console.log(data)
            methods.reset({ ...data })
        },
    })

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={methods.handleSubmit(onSubmit)}>
                <Input id='name' label='성명' maxLength={50} readonly />
                <Input id='phone' label='연락처' type='tel' readonly />
                <div>
                    <SelectBox
                        label='인입 경로'
                        options={[
                            { label: '홈페이지', key: 'homepage' },
                            { label: '카카오톡', key: 'kakao' },
                            { label: '전화', key: 'phone' },
                            { label: '기타', key: 'etc' },
                        ]}
                        selected={methods.watch('inboundSource')}
                        id='inboundSource'
                        readonly
                    />
                </div>

                <Input id='placeName' label='매장명' maxLength={50} readonly />
                <TextArea id='note' label='특이사항' maxLength={500} readonly />
                <Button
                    label='삭제하기'
                    size='full'
                    type='submit'
                    height='high'
                    color='error'
                    bold
                    disabled={methods.formState.isSubmitted}
                />
            </form>
        </FormProvider>
    )
}

export default DeatailForm
