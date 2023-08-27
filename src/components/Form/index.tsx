import CheckBox from 'components/Input/CheckBox'
import Input from 'components/Input/Input'
import TextArea from 'components/Input/TextArea'
import React from 'react'

const Form = () => {
    return (
        <form>
            <Input id='name' label='성명' />
            <Input id='phone' label='연락처' />
            <Input />
            <Input id='placeName' label='매장명' />
            <TextArea label='특이사항' />
            <CheckBox id='agree' label='개인정보 동의 여부' />
        </form>
    )
}

export default Form
