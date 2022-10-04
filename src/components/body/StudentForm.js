import React, { useState } from "react";

function StudentForm({ newStudent }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const formHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/students', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                first_name: firstName, last_name: lastName, phone, email
            }),
        })
            .then(r => r.json())
            .then(student => {
                newStudent(student);
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
            })
    }
    return (

        <div>
            <form onSubmit={formHandler}>
                <div>
                    <div>
                        <label>First Name</label>
                        <input placeholder="First Name" onChange={e => setFirstName(e.target.value)} value={firstName}></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input placeholder="Last Name" onChange={e => setLastName(e.target.value)} value={lastName}></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input placeholder="Phone" onChange={e => setPhone(e.target.value)} value={phone}></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}></input>
                    </div>
                </div>

                <div>
                    <button type='submit'>Create Student</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm;