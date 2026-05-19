import React, { useState } from 'react';

function StreamList() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Input:', input);
        setInput('');
    };

    return (
        <div>
            <h2>StreamList Page</h2>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  placeholder="Add Movie or Program"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StreamList;