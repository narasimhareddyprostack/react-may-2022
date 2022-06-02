import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrAction, decrAction } from '../redux/Product/product.action'
const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state.product
    })
    let incrHandler = () => {
        //dispatch
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr><th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{product.product_Name}</td>
                            <td>{product.product_Name}</td>
                            <td>{product.price}</td>
                            <td><i class="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i class="fa fa-plus-circle" onClick={incrHandler}></i></td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}

export default Product
