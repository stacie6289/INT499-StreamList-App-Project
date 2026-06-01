import React, { useState, useEffect } from 'react';

import '../StreamList.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

function StreamList() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const savedItems = localStorage.getItem("streamlist");
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("streamlist", JSON.stringify(items));
    }, [items]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        if (editId) {
            const updatedItems = items.map((item) =>
                item.id === editId
                    ? { ...item, text: input }
                    : item
            );

            setItems(updatedItems);
            setEditId(null);

        }   else {
            const newItem = {
                id: Date.now(),
                text:input,
                completed:false
            };

            setItems([...items,newItem]);
        }

        console.log(input);

        setInput('');

    };

    const deleteItem = (id) => {
        const filteredItems = items.filter(
            (item) => item.id !== id
        );

        setItems(filteredItems);
    };

    const toggleComplete = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id
                ?{ ... item, completed: !item.completed }
                :item
        );
        
        setItems(updatedItems);
    };

    const editItem = (id) => {
        const selectedItem = items.find(
            (item) => item.id === id
        );

        setInput(selectedItem.text);
        setEditId(id);
    };

    return (
        <div className="container">
            <h2>My StreamList</h2>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Add a movie or program"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button type="submit">
                    {editId ? 'Update' : 'Add'}
                </button>
            </form>

            <div className="list-container">
                {items.map((item) => (
                    <div className="list-item" key={item.id}>
                        <span
                            className={
                                item.completed ? 'completed' : ''
                            } 
                        >
                            {item.text}
                        </span>

                        <div className="buttons">
                            <button onClick={() => toggleComplete(item.id)}>
                                <i className="fas fa-check"></i>
                            </button>

                            <button onClick={() => editItem(item.id)}>
                                <i className="fas fa-edit"></i>
                            </button>

                            <button onClick={() => deleteItem(item.id)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StreamList;