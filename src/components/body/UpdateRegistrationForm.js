import React, { useState } from "react";

function UpdateRegistrationForm({ registration, handleRegistration, updatedRegistration }) {
    const [fee, setFee] = useState('')

    const formHandler = (e) => {
        e.preventDefault();
        handleRegistration(false)
        fetch('http://localhost:9292/registrations/' + registration.id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fee
            }),
        })
            .then(r => r.json())
            .then(booking => {
                updatedRegistration(booking)
                setFee(null);
            })
    }

    return (
        <div>
            <section className="form">
                <form onSubmit={formHandler}>
                    <h1>Please enter your updated payment:</h1>
                    <div className='form-group'>
                        <input
                            type='number'
                            className='form-control'
                            id='fee'
                            value={fee}
                            onChange={e => setFee(e.target.value)}
                            placeholder='Enter Fee' />
                    </div>

                    <div className="form-group">
                        <button className='btn btn-block' type='submit'>Pay Now</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default UpdateRegistrationForm;