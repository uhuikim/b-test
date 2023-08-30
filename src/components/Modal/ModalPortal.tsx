import { ReactNode } from 'react'
import reactDom from 'react-dom'

import style from './ModalPortal.module.scss'

type Props = {
    children: ReactNode
}
const ModalPortal = ({ children }: Props) => {
    const node = document.getElementById('portal') as Element
    return reactDom.createPortal(<div className={style.container}>{children}</div>, node)
}

export default ModalPortal
