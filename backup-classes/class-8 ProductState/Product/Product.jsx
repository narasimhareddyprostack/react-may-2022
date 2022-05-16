import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_Name: "POCO M4 5G (Cool Blue, 128 GB)",
            price: 15000,
            qty: 1,
            image: 'https://rukminim2.flixcart.com/image/224/224/l2jcccw0/mobile/i/p/o/-original-imagdu8j9vxscfdh.jpeg?q=90'
        }
    }

    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>QTY</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product_Name}</td>
                                        <td><img src={this.state.image} height="80px" /></td>
                                        <td>{this.state.price}</td>
                                        <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                        <td>{this.state.price * this.state.qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product
