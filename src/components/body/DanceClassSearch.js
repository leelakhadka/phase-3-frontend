import React from "react";

function DanceClassSearch({ search, onSearchChange }) {
    return (
        <div>
            <input
                value={search}
                type="text"
                id="search"
                placeholder="Search by Dance Category"
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default DanceClassSearch;