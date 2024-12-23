import { useEffect } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import useUploadeItem from 'lib/models/useUploadeItem'

import { Button, CheckBox, Input, SelectBox, TextArea, Spinner } from 'components'

import style from './style.module.scss'

export interface IFormInput {
    inboundSource?: string
    inboundSourceEtc?: string
    name: string
    phone?: string | null
    placeName: string
    note?: string
    agreement: boolean
}

const schema = yup
    .object()
    .shape({
        inboundSource: yup.string(),
        inboundSourceEtc: yup.string(),
        name: yup.string().max(50, '50자 이하만 입력 가능합니다.').required('올바른 성명을 입력해 주세요.'),
        phone: yup
            .string()
            .notRequired()
            .matches(/^01(?:0|[2-8])-\d{3,4}-\d{4}$/, {
                message: '올바른 휴대폰 번호를 입력하세요.',
                excludeEmptyString: true,
            }),
        placeName: yup
            .string()
            .max(50, '50자 이하만 입력 가능합니다.')
            .matches(
                /^[a-zA-Zㄱ-ㅎ가-힣\s]*$/,
                '1-50글자의 한글, 영어, 공백만 입력가능합니다. 맨앞 또는 맨 뒤의 공백은 제거해주세요',
            )
            .required('올바른 매장명을 입력해주세요.'),
        note: yup.string().max(500, '500자 이하만 입력 가능합니다.'),
        agreement: yup.boolean().required().oneOf([true], '동의에 체크해주세요'),
    })
    .required()

const UploadForm = () => {
    const methods = useForm<IFormInput>({
        defaultValues: {
            inboundSource: '',
            inboundSourceEtc: '',
            name: '',
            phone: '',
            placeName: '',
            note: '',
            agreement: false,
        },
        resolver: yupResolver<IFormInput>(schema),
        mode: 'onBlur',
    })
    const { mutate, isLoading } = useUploadeItem()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const apiData = {
            ...data,
            inboundSource: data.inboundSourceEtc ? `기타(${data.inboundSourceEtc})` : data.inboundSource,
        }
        delete apiData.inboundSourceEtc

        mutate(apiData)
    }

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
                    {methods.watch('inboundSource') === '기타' && (
                        <Input id='inboundSourceEtc' placeholder='인입경로를 입력해주세요' />
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
                    disabled={!methods.formState.isValid}
                />
            </form>
            {isLoading && <Spinner dim />}
        </FormProvider>
    )
}

export default UploadForm
