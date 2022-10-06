import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUsers, FaListUl, FaEye } from 'react-icons/fa'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>
                    <FaHome /> Home
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/create_student'>
                        <FaUser />Create Student
                    </Link>
                </li>
                <li>
                    <Link to='/total_students'>
                        <FaUsers />Students List
                    </Link>
                </li>
                <li>
                    <Link to='/available_classes'>
                        <FaListUl />Available Classes
                    </Link>
                </li>
                <li>
                    <Link to='/view_my_bookings'>
                        <FaEye />View My Bookings
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;