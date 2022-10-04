import React, { useState } from "react";

function RegistrationForm({ danceClass, student, handleRegistration }) {

    const [fee, setFee] = useState(0)
    const [studentId, setStudentId] = useState(0)

    const formHandler = (e) => {
        e.preventDefault();
        handleRegistration(false)
        fetch('http://localhost:9292/registrations', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fee, student_id: studentId, dance_class_id: danceClass.id
            }),
        })
            .then(r => r.json())
            .then(newRegistration => {
                setFee(0);
                setStudentId(0);
            })
    }

    function logInputs(danceClass, student) {
        console.log(danceClass)
        console.log(student)
    }
    return (
        < div >
            {logInputs(danceClass, student)}
            {
                student == null ?
                    <div>
                        <h1>Create Student before registering</h1>
                    </div>
                    :
                    <div>
                        <h1>You are about to book a class for student: {student.id} and classID: {danceClass.id}</h1>
                        <form onSubmit={formHandler}>
                            <div>
                                <div>
                                    <label>Fee</label>
                                    <input placeholder="Fee" onChange={e => setFee(e.target.value)} value={fee}></input>
                                </div>
                                <div>
                                    <label>Student ID</label>
                                    <input placeholder="Student ID" onChange={e => setStudentId(e.target.value)} value={studentId}></input>
                                </div>
                            </div>

                            <div>
                                <button type='submit'>Register In Class</button>
                            </div>
                        </form>
                    </div>
            }

        </div >
    )
}

export default RegistrationForm;