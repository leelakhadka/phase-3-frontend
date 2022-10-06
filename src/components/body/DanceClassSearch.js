import React from "react";

function DanceClassSearch({ search, onSearchChange }) {
    return (
        <div className='form-group'>
            <input
                type='text'
                className='form-control'
                id='search'
                value={search}
                onChange={e => onSearchChange(e.target.value)}
                placeholder='Search by Dance Category' />
        </div>
    )
}

export default DanceClassSearch;