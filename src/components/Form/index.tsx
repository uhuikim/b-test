import Button from 'components/Button'
import CheckBox from 'components/Input/CheckBox'
import Input from 'components/Input/Input'
import SelectBox from 'components/Input/SelectBox'
import TextArea from 'components/Input/TextArea'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import style from './style.module.scss'
export interface IFormInput {
    inboundSource: string
    name: string
    phone: string
    placeName: string
    note: string
    agreement: boolean
}

const schema = yup
    .object()
    .shape({
        inboundSource: yup.string(),
        name: yup.string(),
        phone: yup.number(),
        placeName: yup.string(),
        note: yup.string(),
        agreement: yup.boolean(),
    })
    .required()

const Form = () => {
    const methods = useForm({
        defaultValues: {
            inboundSource: '',
            name: '',
            phone: 0,
            placeName: '',
            note: '',
            agreement: false,
        },
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={methods.handleSubmit(onSubmit)}>
                <Input id='name' label='성명' />
                <Input id='phone' label='연락처' />
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
                    />
                    <Input id='pathetc' placeholder='인입경로를 입력해주세요' />
                </div>

                <Input id='placeName' label='매장명' />
                <TextArea id='note' label='특이사항' />
                <CheckBox id='agreement' label='개인정보 동의 여부' />
                <Button label='등록하기' size='full' type='submit' height='high' bold />
            </form>
        </FormProvider>
    )
}

export default Form
