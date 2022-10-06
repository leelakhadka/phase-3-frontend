import React from "react";
import DanceClass from "./DanceClass";

function DanceClassList({ dance_classes, handleRegistration, handleDanceClass }) {


    const dance_class_components = dance_classes.map(dance_class => <DanceClass key={dance_class.id} dance_class={dance_class} handleRegistration={handleRegistration} handleDanceClass={handleDanceClass} />);

    return (
        <>
            <h1> Dance Classes</h1>
            <div className="tickets">
                <div className="dance_class-headings">
                    <div>Dance Styple</div>
                    <div>Location</div>
                    <div>Date/Time/Duration</div>
                    <div>Booking</div>
                </div>
                {dance_class_components}
            </div>

        </>
    )
}

export default DanceClassList;