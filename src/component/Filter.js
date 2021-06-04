import React from 'react'
import ListTag from './ListTag';

let price_ranges = ["Rs. 500 to Rs. 1000", "Rs. 1000 to Rs. 1700", "Rs. 1700 to Rs. 2500"]

const Filter = ({items}) => {

    let brands = new Set();
    items.forEach(i => {
        brands.add(i.brand);
    });
    brands = [...brands];

    let colors = new Set();
    items.forEach(i => {
        colors.add(i.color);
    });
    colors = [...colors];

    return (
        <div className="filter">
            <div className="filter-header">
                Filter
            </div>
            <div>
                <span>Brand</span>
                <ul className="filter-list">
                    { brands.map((brand,i) => <ListTag label={brand} id={"Brand"} key={i}/>) }
                </ul>
            </div>
            <div>
                <span>Price</span>
                <ul className="filter-list">
                    { price_ranges.map((price_range,i) => <ListTag label={price_range} id={"Price"} key={i}/>) }
                </ul>
            </div>
            <div>
                <span>Color</span>
                <ul className="filter-list">
                    { colors.map((color,i) => <ListTag label={color} id={"Color"} key={i}/>) }
                </ul>
            </div>
        </div>
    )
}

export default Filter
