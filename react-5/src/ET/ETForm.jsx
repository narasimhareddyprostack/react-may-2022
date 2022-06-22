import React, { useState } from 'react'

const ETForm = (props) => {
    let { track, setTrack } = props
    let [totalAmount, setTotalAmount] = useState(0)
    let [value, setValue] = useState(0)
    value = parseInt(value)
    let todayDate = new Date().toLocaleString()

    let getAmountHandler = (event) => {
        setValue(event.target.value)
    }
    let addAmountHandler = () => {
        setTotalAmount(totalAmount + value)
        setValue("")
        setTrack([...track, {
            tdate: todayDate,
            addAmount: value,
            removeAmount: "-",
            balanceAmount: totalAmount

        }])

    }
    let spendAmountHandler = () => {
        setTotalAmount(totalAmount - value)
        setValue("")
        setTrack([...track, {
            tdate: todayDate,
            addAmount: "-",
            removeAmount: value,
            balanceAmount: totalAmount

        }])
    }
    return <div className="container">
        <pre>Amount:{value}</pre>
        <pre>Date:{todayDate}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Expense Tracker</h3>
                    </div>
                    <div className="card-body">

                        <div className="form-group">
                            <input value={value} type="number" className="form-control" onChange={getAmountHandler} />
                        </div>
                        <input onClick={addAmountHandler} type="submit" value="ADD" className="btn btn-success mr-5" />
                        <input onClick={spendAmountHandler} type="submit" value="Remove" className="btn btn-warning" />

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ETForm
