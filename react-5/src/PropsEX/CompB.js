
const CompB = (props) => {
    return (
        <div>
            <h1>CompB ......</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Employee Name:{props.name}</h3>
            <h4>Employee Salary: {props.salary}</h4>
        </div>
    )
}

export default CompB
