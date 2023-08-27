import Button from 'components/Button'
import CheckBox from 'components/Input/CheckBox'
import Input from 'components/Input/Input'
import SelectBox from 'components/Input/SelectBox'
import TextArea from 'components/Input/TextArea'
import React from 'react'

import style from './style.module.scss'

const Form = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
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
                    selected='홈페이지'
                />
                <Input placeholder='인입경로를 입력해주세요' />
            </div>

            <Input id='placeName' label='매장명' />
            <TextArea label='특이사항' />
            <CheckBox id='agree' label='개인정보 동의 여부' />
            <Button label='등록하기' size='full' type='submit' height='high' bold />
        </form>
    )
}

export default Form
