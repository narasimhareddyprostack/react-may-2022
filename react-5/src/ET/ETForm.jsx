import React, { useState } from 'react'

const ETForm = (props) => {
    let { track, setTrack } = props
    let [amount, setAmount] = useState(0)
    let [balanceAmount, setBal] = useState(0);

    let todayDate = new Date().toLocaleString()

    let getAmountHandler = (event) => {
        setAmount(parseInt(event.target.value))
    }
    let addAmountHandler = () => {
        setBal(parseInt(balanceAmount) + amount)
        setAmount("")
        setTrack([...track, {
            tdate: todayDate,
            addAmount: amount,
            removeAmount: "-",
            balanceAmount: balanceAmount

        }])



    }
    let spendAmountHandler = () => {
        setBal(balanceAmount - amount)
    }
    return <div className="container">
        <pre>Amount:{amount}</pre>
        <pre>Date:{todayDate}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Expense Tracker</h3>
                    </div>
                    <div className="card-body">

                        <div className="form-group">
                            <input value={amount} type="number" className="form-control" onChange={getAmountHandler} />
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
