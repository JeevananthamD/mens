import React, { createContext, useState } from 'react'
import CategoryItemList from './CategoryItemList'
import Filter from './Filter'
import '../styles/CategoryPage.css'

const items = [
    { 
        brand: "Nike", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "1500", 
        color: "Blue", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Ramraj", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "500", 
        color: "Red", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Puma", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "2000", 
        color: "Black", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Nike", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "800", 
        color: "Blue", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Puma", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "1600", 
        color: "Red", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Ramraj", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "2400", 
        color: "Green", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Nike", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "1200", 
        color: "Black", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Puma", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "1900", 
        color: "White", 
        description: "Solid Round Neck T-shirt" 
    },
    { 
        brand: "Ramraj", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbVMF55N38UPeFaPrVirHRStuxQ_y_QS2Xg&usqp=CAU", 
        price: "700", 
        color: "Black", 
        description: "Solid Round Neck T-shirt" 
    }
]

export const FilterContext = createContext();

let filtered_brands = [];
let filtered_colors = [];

const CategoryPage = () => {

    const [filtered_items, setItems] = useState(() => items);

    const filteredArray = (target, array) => {
        let {name, checked} = target;
        if(checked) {
            array.push(name);
        }
        else {
            array.splice(array.indexOf(name),1);
        }
    }

    const itemsFilter = () => {
        let filter_items = items.filter((item) => {
            if(filtered_brands.length && !filtered_colors.length) {
                return filtered_brands.includes(item.brand);
            }
            else if(filtered_colors.length && !filtered_brands.length) {
                return filtered_colors.includes(item.color);
            }
            else if(filtered_brands.length && filtered_colors.length) {
                if(filtered_brands.includes(item.brand) && filtered_colors.includes(item.color)) {
                    return true;
                }
                return false;
            }
            else {
                return true;
            }
        });
        setItems(filter_items);
    }

    const filter = (e) => {
        let id = e.target.id;
        if(id === "Brand") {
            filteredArray(e.target, filtered_brands);
        }
        else if(id === "Color") {
            filteredArray(e.target, filtered_colors);
        }
        itemsFilter();
    }

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="" style={{width: "250px"}}>
                    <div className="filter-container">
                        <FilterContext.Provider value={filter}>
                            <Filter items={items}/>
                        </FilterContext.Provider>
                    </div>
                </div>
                <div className="col">
                    <div className="item-container">
                        <CategoryItemList items={filtered_items}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
