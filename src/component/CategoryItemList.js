import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryItemList = ({items}) => {
    return (
        <div className="category-item-list">
            { items.map((item,i) => <CategoryItem item={item} key={i}/>) }
        </div>
    )
}

export default CategoryItemList
