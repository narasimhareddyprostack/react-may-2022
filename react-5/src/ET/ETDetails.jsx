import React from 'react'

const ETDetails = ({ track }) => {
    return (
        <div className="container">
            <pre>{JSON.stringify(track)}</pre>
            <h2>ET Details</h2>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Date</th>
                                <th>Adding Amount</th>
                                <th>Remove Amount</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                track.map((track, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{track.tdate}</td>
                                        <td>{track.addAmount}</td>
                                        <td>{track.removeAmount}</td>
                                        <td>{track.balanceAmount}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ETDetails
