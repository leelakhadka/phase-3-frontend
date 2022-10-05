import React from "react";
import { useState } from "react";
import DanceClass from "./DanceClass";
import RegistrationForm from "./RegistrationForm";

function DanceClassList({ dance_classes, student, newRegistration }) {
    const [toggle, setToggle] = useState(false);
    const [danceClass, setDanceClass] = useState(null);

    function showRegistration(isShowRegistration) {
        setToggle(isShowRegistration)
    }

    function handleDanceClass(danceClass) {
        setDanceClass(danceClass)
    }

    const dance_class_components = dance_classes.map(dance_class => <DanceClass key={dance_class.id} dance_class={dance_class} handleRegistration={showRegistration} handleDanceClass={handleDanceClass} />);

    return (
        <div>
            {
                toggle ?
                    <div>
                        <RegistrationForm danceClass={danceClass} student={student} handleRegistration={showRegistration} newRegistration={newRegistration} />
                    </div>
                    :
                    <div>
                        {dance_class_components}
                    </div>
            }

        </div>
    )
}

export default DanceClassList;