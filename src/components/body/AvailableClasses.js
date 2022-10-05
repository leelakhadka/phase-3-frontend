import React from "react";
import { useState } from "react";
import DanceClassSearch from "./DanceClassSearch";
import DanceClassList from "./DanceClassList";

function AvailableClasses({ classList, student, newRegistration }) {
    const [searchString, setSearchString] = useState("");

    const filterdList = classList.filter(danceClass => danceClass.category.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <div>
            <DanceClassSearch search={searchString} onSearchChange={setSearchString} />
            <DanceClassList dance_classes={filterdList} student={student} newRegistration={newRegistration} />
        </div>
    )
}

export default AvailableClasses;