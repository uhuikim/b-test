import Button from 'components/Button'
import CheckBox from 'components/Input/CheckBox'
import Input from 'components/Input/Input'
import SelectBox from 'components/Input/SelectBox'
import TextArea from 'components/Input/TextArea'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import style from './style.module.scss'
import { useEffect } from 'react'
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
        name: yup.string().max(50, '50자 이하만 입력 가능합니다.').required('올바른 성명을 입력해 주세요.'),
        phone: yup.string().matches(/^01(?:0|[2-8])-\d{3,4}-\d{4}$/, '올바른 휴대폰 번호를 입력하세요.'),
        placeName: yup
            .string()
            .max(50, '50자 이하만 입력 가능합니다.')
            .matches(
                /^[a-zA-Zㄱ-ㅎ가-힣\s]*$/,
                '1-50글자의 한글, 영어, 공백만 입력가능합니다. 맨앞 또는 맨 뒤의 공백은 제거해주세요',
            )
            .required('올바른 매장명을 입력해주세요.'),
        note: yup.string().max(500, '500자 이하만 입력 가능합니다.'),
        agreement: yup.boolean().oneOf([true], '동의에 체크해주세요'),
    })
    .required()

const Form = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    useEffect(() => {
        methods.setFocus('name')
    }, [methods.setFocus])

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={methods.handleSubmit(onSubmit)}>
                <Input id='name' label='성명' maxLength={50} />
                <Input id='phone' label='연락처' type='tel' />
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
                    {methods.watch('inboundSource') === 'etc' && (
                        <Input id='pathetc' placeholder='인입경로를 입력해주세요' />
                    )}
                </div>

                <Input id='placeName' label='매장명' maxLength={50} />
                <TextArea id='note' label='특이사항' maxLength={500} />
                <CheckBox id='agreement' label='개인정보 동의 여부' />
                <Button
                    label='등록하기'
                    size='full'
                    type='submit'
                    height='high'
                    bold
                    // disabled={!methods.formState.isValid}
                />
            </form>
        </FormProvider>
    )
}

export default Form
