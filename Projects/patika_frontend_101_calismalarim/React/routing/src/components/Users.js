import { useState, useEffect } from 'react'
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User"
function Users() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([]);

    const { path, url } = useRouteMatch();
    console.log(path, url)
  
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
            setUsers(res.data)).finally(() => setLoading(false))
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            {/* <li>
                <Link to="/user/1">User 1</Link>
            </li> */}


            <ul>
                {users.map((element) =>
                    <li key={element.id}>
                        <Link to={`${url}/${element.id}`}>{element.name}</Link>
                    </li>
                )
                }
            </ul>

            <Switch>
                <Route path={`${path}/:id`} component={User}/>
                    {/* <Topic /> */}
                
                <Route path={path}>
                    <h3>Please select a User.</h3>
                </Route>
            </Switch>

        </div>
    )
}

export default Users
