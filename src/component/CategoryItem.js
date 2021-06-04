import React from 'react'

const CategoryItem = ({item}) => {

    const {img, brand, price, color, discount, description} = item

    return (
        <div className="card category-item">
            <div className="item-img-container">
                <img src={img} className="card-img-top" alt="..." style={{height: "280px", width: "210px"}}/>
            </div>
            <div className="card-body category-item-body">
                <h5 className="card-title">{brand}</h5>
                <p className="card-text item-description">{description}</p>
                <h6>Rs. {price}</h6>
            </div>
        </div>
    )
}

export default CategoryItem
