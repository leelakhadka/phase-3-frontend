import React from "react";
import { useState } from "react";
import DanceClassSearch from "./DanceClassSearch";
import DanceClassList from "./DanceClassList";
import RegistrationForm from "./RegistrationForm";

function AvailableClasses({ classList, student, newRegistration }) {
    const [toggle, setToggle] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [danceClass, setDanceClass] = useState(null);


    function handleDanceClass(danceClass) {
        setDanceClass(danceClass)
    }

    function showRegistration(isShowRegistration) {
        setToggle(isShowRegistration)
    }

    const filterdList = classList.filter(danceClass => danceClass.category.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <div>
            {
                toggle ?
                    <div>
                        <RegistrationForm danceClass={danceClass} student={student} handleRegistration={showRegistration} newRegistration={newRegistration} />
                    </div>
                    :
                    <>
                        <DanceClassSearch search={searchString} onSearchChange={setSearchString} />
                        <DanceClassList dance_classes={filterdList} handleRegistration={showRegistration} handleDanceClass={handleDanceClass} />
                    </>
            }

        </div>
    )
}

export default AvailableClasses;