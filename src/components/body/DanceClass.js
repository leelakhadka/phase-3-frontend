function DanceClass({ dance_class, handleRegistration, handleDanceClass }) {

    const { category, location, date, starts_at, duration } = dance_class

    const handleToggle = () => {
        handleRegistration(true)
        handleDanceClass(dance_class)
    }

    return (
        <div>
            <p>Dance Style: {category}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Time: {starts_at}</p>
            <p>Duration: {duration} hour</p>
            <p>Dance_Class Id: {dance_class.id}</p>
            <br></br>
            <button onClick={handleToggle}>Book this class</button>
        </div>
    )
}

export default DanceClass;