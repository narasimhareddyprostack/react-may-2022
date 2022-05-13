import React from 'react'

function ObjectTest() {
    let emp = { id: 101, name: "Rahul Gandhi" }
    return (
        <div>
            <h1>{JSON.stringify(emp)}</h1>
        </div>
    )
}

export default ObjectTest
