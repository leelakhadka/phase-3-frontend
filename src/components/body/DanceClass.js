
function DanceClass({ dance_class, handleRegistration, handleDanceClass }) {

    const { id, category, location, date, starts_at, ends_at, duration } = dance_class

    const handleToggle = () => {
        handleRegistration(true)
        handleDanceClass(dance_class)
    }


    return (
        <div className='dance_class'>
            <div>{category}</div>
            <div>{location}</div>
            <div>{date}/{starts_at}/{duration} hour</div>
            <button className='btn' onClick={handleToggle}>Book this class</button>
        </div>
    )
}

export default DanceClass;