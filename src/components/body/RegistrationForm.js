import React, { useState } from "react";
import { FaHome, FaUser, FaListUl } from 'react-icons/fa'

function RegistrationForm({ danceClass, student, handleRegistration, newRegistration }) {

    const [fee, setFee] = useState('')
    const [studentId, setStudentId] = useState('')

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
            .then(registration => {
                newRegistration(registration)
                setFee(null);
                setStudentId(null);
            })
    }

    return (
        < div >
            {
                student == null ?
                    <section className='heading'>
                        <p>Create Student before registering</p>
                    </section>
                    :
                    <section className="form">
                        <form onSubmit={formHandler}>
                            <section className='heading'>
                                <p>You are about to book a class for student: {student.id}</p>
                            </section>
                            <div className='form-group'>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='fee'
                                    value={fee}
                                    onChange={e => setFee(e.target.value)}
                                    placeholder='Enter Fee' />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='studentId'
                                    value={studentId}
                                    onChange={e => setStudentId(e.target.value)}
                                    placeholder='Enter Student ID' />
                            </div>

                            <div className="form-group">
                                <button className='btn btn-block' type='submit'>Register In Class</button>
                            </div>
                        </form>
                    </section>
            }

        </div >
    )
}

export default RegistrationForm;