
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
        <div className='dance_class'>
            <p>{dance_class.category}</p>
            <p>{fee}/{10 - fee}</p>
            <button className='btn btn-danger' onClick={handleClick}>Cancel this booking</button>
            <button className='btn btn-primary' onClick={handleToggle}>Update this booking</button>
        </div>
    )
}

export default Booking;