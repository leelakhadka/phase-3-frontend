
function Booking({ booking, deleteRegistration, handleRegistration, existingRegistration }) {

    const { id, fee, paid, student_id, dance_class } = booking

    const handleClick = () => {
        fetch('http://localhost:9292/registrations/' + id, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(registration => {
                deleteRegistration(registration)
            })
    }

    const handleToggle = () => {
        handleRegistration(true)
        existingRegistration(booking)
    }

    return (
        <div>
            <p>Booked Class: {dance_class.category}</p>
            <p>Amount paid: {fee}</p>
            {
                paid ?
                    <div>
                        <p>Total Amount Paid</p>
                    </div>
                    :
                    <div>
                        <p>Partial Amount Paid </p>
                    </div>
            }
            <button onClick={handleClick}>Cancel this booking</button>
            <button onClick={handleToggle}>Update this booking</button>
        </div>
    )
}

export default Booking;