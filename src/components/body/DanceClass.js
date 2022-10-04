
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

function DanceClass({ dance_class, handleRegistration, handleDanceClass }) {

    const { id, category, location, date, starts_at, ends_at, duration } = dance_class

    const handleToggle = () => {
        handleRegistration(true)
        handleDanceClass(dance_class)
    }


    return (
        <div>
            <p>Category: {category}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Start Time: {starts_at}</p>
            <p>Duration: {duration} hour</p>
            <p>Dance Class ID: {dance_class.id}</p>
            <br></br>
            <p>Book this class: <button onClick={handleToggle}></button></p>
        </div>
    )
}

export default DanceClass;