import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to='/' className="home-link">Home </Link>
            <Link to='/create_student' className="home-link">Create Student </Link>
            <Link to='/available_classes' className="home-link">Available Classes </Link>
            <Link to='/view_my_bookings' className="home-link">View My Bookings </Link>
        </div>
    )
}

export default NavBar;