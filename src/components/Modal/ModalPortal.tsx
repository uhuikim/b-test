import { ReactNode } from 'react'
import style from './ModalPortal.module.scss'

import reactDom from 'react-dom'

type Props = {
    children: ReactNode
}
const ModalPortal = ({ children }: Props) => {
    const node = document.getElementById('portal') as Element
    return reactDom.createPortal(<div className={style.container}>{children}</div>, node)
}

export default ModalPortal
