let Person = (props) => {
    return <div>
        <hr />
        <h3>Person Component</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Id:{props.user.uid}</h3>
        <h3>Name:{props.user.uName}</h3>
        <h3>Email:{props.user.email}</h3>
    </div>
}
export default Person
