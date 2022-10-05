import React, { useState } from "react";

function UpdateRegistrationForm({ registration, handleRegistration, updatedRegistration }) {
    const [fee, setFee] = useState(0)

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
                setFee(0);
            })
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label>Fee</label>
                    <input placeholder="Fee" onChange={e => setFee(e.target.value)} value={fee}></input>
                </div>

                <div>
                    <button type='submit'>Register In Class</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRegistrationForm;