import React, { useState } from 'react'
import './estyle.css';
const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
];
const Employee = () => {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);
    let filterData = (event) => {
        let keyword = event.target.value;
        console.log(keyword)
        if (keyword != '') {
            let results = foundUsers.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase())
            });
            setFoundUsers(results)
        } else {
            setFoundUsers(USERS)
        }
        setName(keyword)
    }

    return <div className="econtainer">
        <input
            type="search"
            value={name}
            onChange={filterData}
            className="input"
            placeholder="Filter"
        />
        <div className="row">
            <div className="col">
                <table className="table table-hover">
                    <thead className="bg-warning text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foundUsers.length > 0 ? <>
                                {
                                    foundUsers.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                        </tr>
                                    })
                                }
                            </> : <h1>Not Found</h1>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Employee
