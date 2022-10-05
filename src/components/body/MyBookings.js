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
            {
                student == null ?
                    <section className='heading'>
                        <p>Create Student before viewing your bookings</p>
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
                                    <h1> Dance Classes</h1>
                                    <div className="tickets">
                                        <div className="ticket-headings">
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