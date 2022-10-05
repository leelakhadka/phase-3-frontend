import React from "react";
import { useState } from "react";
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
            {console.log(studentBookings)}
            {console.log(student)}
            {
                student == null ?
                    <div>
                        <h1>Create Student before viewing your bookings</h1>
                    </div>
                    :
                    <div>
                        {
                            toggle ?
                                <div>
                                    <UpdateRegistrationForm registration={registration} handleRegistration={showRegistration} updatedRegistration={updatedRegistration} />
                                </div>
                                :
                                <div>
                                    {booking_components}
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default MyBookings;