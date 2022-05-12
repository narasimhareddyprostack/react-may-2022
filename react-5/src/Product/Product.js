import React from 'react'
class Product extends React.Component {
    product_Name = "Iphone 5s"
    price = 25000
    brand = 'Apple'
    image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WPphDZtSsmrqK5hBm1Cch0_LSZKMs9V0P4WsX_4OYYqcDs9CfboD&usqp=CAE&s'
    render() {
        return <div>
            <h2> Product Name : {this.product_Name} </h2>
            <h2> Price : {this.price} </h2>
        </div>
    }
}
export default Product