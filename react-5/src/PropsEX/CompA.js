import CompB from './CompB'
let CompA = () => {
    let esal = 45000
    let ename = "Rahul Gandhi"
    return <div>
        <h1>CompA ......</h1>
        <hr />
        <CompB name={ename} salary={esal} loc={"Wayanad"} />

    </div>
}
export default CompA