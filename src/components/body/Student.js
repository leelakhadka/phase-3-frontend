
function Student({ student }) {

    const { first_name, last_name, phone, email } = student

    return (
        <div className='student'>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
    )
}

export default Student;