import { useEffect, useRef, useState } from 'react'

import cn from 'classnames'

import style from './SelectBox.module.scss'
import { BsChevronDown } from 'react-icons/bs'
import { useFormContext } from 'react-hook-form'

type DataType = { key: string; label: string }

type Props = {
    options: Array<DataType>
    selected?: string
    label?: string
    id: string
    readonly?: boolean
}

const SelectBox = ({ options, selected, label, id, readonly }: Props) => {
    const { setValue } = useFormContext()
    const selectBoxRef = useRef<HTMLDivElement | null>(null)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleMenuOpen = () => {
        if (readonly) return

        setMenuOpen((prev) => !prev)
    }
    const handleSelectItem = (el: DataType) => {
        setMenuOpen(false)
        setValue(id, el.label)
    }

    // 외부 클릭시 드롭메뉴 close
    useEffect(() => {
        const handleOutsideClose = (e: any) => {
            if (menuOpen && !(selectBoxRef.current && selectBoxRef.current.contains(e.target))) setMenuOpen(false)
        }
        document.addEventListener('click', handleOutsideClose)

        return () => document.removeEventListener('click', handleOutsideClose)
    }, [menuOpen])

    return (
        <div>
            <span className={style.label}>{label}</span>
            <div className={cn(style.select)} ref={selectBoxRef}>
                <button type='button' onClick={handleMenuOpen} className={style.selectButton}>
                    {selected || '선택'}
                    <BsChevronDown />
                </button>

                {menuOpen && (
                    <ul className={style.selectList}>
                        {options.map((el) => (
                            <li key={el.key} className={style.selectItem}>
                                <button
                                    className={cn({
                                        [style.selected]: el.label === selected,
                                    })}
                                    onClick={() => handleSelectItem(el)}
                                >
                                    {el.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SelectBox
