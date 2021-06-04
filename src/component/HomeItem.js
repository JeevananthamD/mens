import React from 'react'

const HomeItem = ({item}) => {
    return (
        <div className="home-item-wrap col-sm-3" style={{height: "200px"}}>
            <div className=" d-flex justify-content-center">
                <div className="home-item p-1">
                    <div style={{height: "150px", width: "150px"}}>
                        <img src={item.img} style={{height: "150px", width: "150px"}}/>
                    </div>
                    <h5>{item.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default HomeItem
