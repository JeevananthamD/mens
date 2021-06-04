import React from 'react'
import '../styles/ItemPage.css'

const ItemPage = () => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className="col" style={{width: "321px"}}>
                    <img src="https://4.imimg.com/data4/QJ/LN/MY-32341194/readymade-mens-casual-shirts-500x500.jpg" style={{height: "auto", width: "321px"}}/>
                </div>
                <div className="col">
                    <h3>Puma</h3>
                    <p>Solid Round Neck T-shirt</p>
                    <h4 className="pt-4">Rs. 500</h4>
                    <div className="pt-4">
                        <div>
                            <h5>SELECT SIZE</h5>
                        </div>
                        <div className="size-button-container">
                            <input id="M" name="size" type="radio"/>
                            <label className="radio-lable" htmlFor="M">M</label>
                            <input id="L" name="size" type="radio"/>
                            <label className="radio-lable" htmlFor="L">L</label>
                        </div>
                    </div>
                    <div className="button-wrap">
                        <div className="button-container">
                            <button>Bag</button>
                        </div>
                        <div className="button-container">
                            <button>Wishlist</button>
                        </div>
                    </div>
                    <div className="fit">
                        <h5> Fit </h5>
                        <div>
                            Slim fit
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ItemPage
