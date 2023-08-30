import { IoSearch } from 'react-icons/io5'

import style from './SearchInput.module.scss'

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput = ({ handleChange }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type='search' placeholder='매장명 검색' onChange={handleChange} />
                <IoSearch size={15} />
            </div>
        </div>
    )
}

export default SearchInput
