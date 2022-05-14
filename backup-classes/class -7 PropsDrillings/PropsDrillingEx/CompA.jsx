import CompB from './CompB'
let CompA = () => {
    let name = "Rahul Gandhi"
    return <>
        <h1>Component A</h1>
        <hr />
        <CompB name={name} />
    </>
}
export default CompA