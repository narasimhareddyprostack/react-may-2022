import React, { useState } from 'react'

const Product = () => {
    let [proudct, setProduct] = useState({
        name: "Iphone 5s",
        price: 25000,
        qty: 1
    })
    let incrHandler = () => {
        setProduct({ ...proudct, qty: proudct.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...proudct, qty: proudct.qty - 1 })
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{proudct.name}</td>
                            <td>{proudct.price}</td>
                            <td>
                                <button onClick={decrHandler}>-</button>
                                {proudct.qty}
                                <button onClick={incrHandler}>+</button>
                            </td>
                            <td>{proudct.qty * proudct.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product
