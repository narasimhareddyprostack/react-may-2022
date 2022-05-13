import React from 'react'
class Product extends React.Component {
    product_Name = "Iphone 5s"
    price = 25000
    brand = 'Apple'
    image = 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dqjuq8sug.jpeg?q=70'
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.image} />
                        </div>
                        <div className="card-body">
                            <h4>{this.product_Name}</h4>
                            <h4>{this.price}</h4>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.image} />
                        </div>
                        <div className="card-body">
                            <h4>{this.product_Name}</h4>
                            <h4>{this.price}</h4>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.image} />
                        </div>
                        <div className="card-body">
                            <h4>{this.product_Name}</h4>
                            <h4>{this.price}</h4>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.image} />
                        </div>
                        <div className="card-body">
                            <h4>{this.product_Name}</h4>
                            <h4>{this.price}</h4>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    }
}
export default Product