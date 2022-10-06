import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa'
import Booking from "./Booking";
import UpdateRegistrationForm from "./UpdateRegistrationForm";

function MyBookings({ student, studentBookings, deleteRegistration, updatedRegistration }) {
    const [toggle, setToggle] = useState(false);
    const [registration, setRegistration] = useState(null)

    function showRegistration(isShowRegistration) {
        setToggle(isShowRegistration)
    }

    function existingRegistration(regObj) {
        setRegistration(regObj)
    }

    const booking_components = studentBookings.map(booking => <Booking key={booking.id} booking={booking} deleteRegistration={deleteRegistration} handleRegistration={showRegistration} existingRegistration={existingRegistration} />);

    return (
        <div>
            {
                student == null ?
                    <section className='container'>
                        <h1>Create Student before viewing your bookings</h1>
                        <Link to='/create_student' className='btn container' style={{ width: '250px', position: 'center' }}>
                            <FaArrowCircleLeft /> Back To Create Student
                        </Link>
                    </section>
                    :
                    <div>
                        {
                            toggle ?
                                <div>
                                    <UpdateRegistrationForm registration={registration} handleRegistration={showRegistration} updatedRegistration={updatedRegistration} />
                                </div>
                                :
                                <>
                                    <h1> Dance Classes for {student.first_name} {student.last_name} ({studentBookings.length})</h1>
                                    <div className="tickets">
                                        <div className="dance_class-headings">
                                            <div>Booked Class</div>
                                            <div>Total Paid/Remaining Balance</div>
                                            <div>Cancel Booking</div>
                                            <div>Pay Remaining</div>
                                        </div>
                                        {booking_components}
                                    </div>

                                </>
                        }
                    </div>
            }
        </div>
    )
}

export default MyBookings;