import React from 'react'
let CompC = (props) => {
    return <React.Fragment>
        <h1>Component C</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Name:{props.name}</h4>
        <hr />
    </React.Fragment>
}
export default CompC