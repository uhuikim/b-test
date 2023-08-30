import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import { Button, Input, SelectBox, TextArea, Spinner } from 'components'

import useDeleteItem from 'lib/models/useDeleteItem'

import style from './style.module.scss'
import useGetDetailItem from 'lib/models/useGetDetailItem'

export interface IFormInput {
    inboundSource?: string
    name: string
    phone?: string | null
    placeName: string
    note?: string
    agreement: boolean
}

const DeatailForm = () => {
    const { id } = useParams() as { id: string }
    const { mutate: deleteMutate, isLoading } = useDeleteItem(Number(id), 'success')
    const { data, isSuccess } = useGetDetailItem(id)

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

    const onSubmit: SubmitHandler<IFormInput> = () => {
        deleteMutate()
    }

    useEffect(() => {
        if (isSuccess) {
            methods.reset({
                inboundSource: data?.inboundSource || '',
                name: data?.name || '',
                phone: data?.phone || '',
                placeName: data?.placeName || '',
                note: data?.note || '',
            })
        }
    }, [isSuccess])

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
            {isLoading && <Spinner dim />}
        </FormProvider>
    )
}

export default DeatailForm
