import style from './SearchInput.module.scss'

import { IoSearch } from 'react-icons/io5'
const SearchInput = () => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type='search' placeholder='매장명 검색' />
                <IoSearch size={15} />
            </div>
        </div>
    )
}

export default SearchInput
