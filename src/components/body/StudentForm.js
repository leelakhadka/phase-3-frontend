import React, { useState } from "react";
import { FaUser } from 'react-icons/fa'

function StudentForm({ newStudent }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [created, setCreated] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)

    const formHandler = (e) => {
        e.preventDefault();

        if (firstName === '' || lastName === '' || phone === '' || email === '') {
            setIsInvalid(true);
            setTimeout(() => setIsInvalid(false), 3000)
        } else {
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
                    setCreated(true);
                    setTimeout(() => setCreated(false), 3000)
                })
        }
    }

    return (
        <>
            <section className='heading'>
                <h1><FaUser /> Student</h1>
                <p>Create a new Student</p>
            </section>
            <section className="form">
                <form onSubmit={formHandler}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='firstName'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder='Enter your first name' />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='lastName'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder='Enter your last name' />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='phone'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder='Enter your phone' />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Enter your email' />
                    </div>

                    <div className="form-group">
                        <button className='btn btn-block' type='submit'>Create Student</button>
                    </div>
                </form>
            </section>


            {
                created ?
                    <div>
                        <h1 className="container">You have created a new Student</h1>
                    </div>
                    :
                    <></>
            }

            {
                isInvalid ?
                    <div>
                        <h1 className="container">Please Enter all the fields in the form</h1>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default StudentForm;