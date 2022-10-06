import React from "react";
import Student from "./Student";

function Students({ studentsList }) {

    const student_components = studentsList.map(student => <Student key={student.id} student={student} />);

    return (
        <>
            <h1>Total Students</h1>
            <div className="tickets">
                <div className="student-headings">
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Phone</div>
                    <div>Email</div>
                </div>
                {student_components}
            </div>
        </>
    )
}

export default Students;