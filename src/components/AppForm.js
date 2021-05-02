import React from 'react'

export default function AppForm(props) {
    const { value, onChange, onNoteChange, note, onNoteSubmit } = props;
    return (
        <div>
            <form onSubmit={onNoteSubmit}>
                <p>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="username"
                        value={note.username}
                        onChange={onNoteChange}
                        required
                    />
                </p>
                <p>
                    <label>Nickname</label>
                    <input
                        type="text"
                        placeholder="Nickname"
                        name="nickname"
                        value={note.nickname}
                        onChange={onNoteChange}
                        required
                    />
                </p>
                <p>
                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={note.age}
                        onChange={onNoteChange}
                        required
                    />
                </p>
                <p>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={note.email}
                        onChange={onNoteChange}
                        required
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="description"
                        name="description"
                        value={note.description}
                        onChange={onNoteChange}
                        required
                    />
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}
