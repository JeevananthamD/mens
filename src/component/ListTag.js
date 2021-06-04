import {React, useContext} from 'react'
import { FilterContext } from "./CategoryPage"

const ListTag = ({label, id}) => {

    const filter = useContext(FilterContext);

    return (
        <li>
            <input id={id} name={label} type="checkbox" onChange={filter}/>
            <label htmlFor={label}>{label}</label>
        </li>
    )
}

export default ListTag
