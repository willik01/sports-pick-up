import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            Welcome,<Link to="/profile" state={{ from: "app" }}><b>{user.name}</b></Link>
            &nbsp; | &nbsp;
            <Link to="/pickups"> <b> Pick-Ups</b></Link>
            &nbsp; | &nbsp;
            {/* <Link to="/profile"><b>{user.name}</b></Link>
            &nbsp; | &nbsp; */}
            <Link to="" onClick={handleLogOut}><b>Log Out</b></Link>
        </nav>
    )
}