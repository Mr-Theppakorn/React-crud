import { useState } from 'react';
import './App.css';

const clearNote = {
  username: '', nickname: '', age: '', email: '', description: ''
};

function App() {
  const [note, setNote] = useState({
    username: '', nickname: '', age: '', email: '', description: ''
  });
  const [editNote, setEditNote] = useState(null);
  const [noteList, setNoteList] = useState([]);

  function onNoteChange(e) {
    const { name, value } = e.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      }
    });
  }

  function onEditNoteChange(e) {
    const { name, value } = e.target;
    setEditNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      }
    });
  }


  function onNoteSubmit(e) {
    e.preventDefault();
    setNoteList((preNoteList) => {
      const newNote = { ...note };
      newNote.id = Date.now().toString();
      return [newNote, ...preNoteList];
    });

    setNote(clearNote);
  }

  function onEditNoteSubmit(e) {
    e.preventDefault();
    setNoteList((preNoteList) => {
      return noteList.map((showNote) => {
        if (showNote.id !== editNote.id) return showNote;
        return editNote;
      });
    });

    setEditNote(null);
  }

  function onNoteDelete(noteId) {
    setNoteList((preNoteList) => {
      return preNoteList.filter((showNote) => {
        return showNote.id !== noteId;
      });
    });

  }
  <table></table>

  const noteElement = noteList.map((showNote) => {
    return (
      <div key={showNote.id} className="app-note">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Nickname</th>
              <th>Age</th>
              <th>Email</th>
              <th>description</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{showNote.username}</td>
              <td>{showNote.nickname}</td>
              <td>{showNote.age}</td>
              <td>{showNote.email}</td>
              <td>{showNote.description}</td>
              <td><a onClick={() => { setEditNote(showNote) }}>Edit</a><span> | </span><a onClick={() => { onNoteDelete(showNote.id) }}>Delete</a></td>
            </tr>
          </tbody>
        </table>

      </div>
    )

  });

  let editNoteElement = null;
  if (!!editNote) {
    editNoteElement = (
      <div className="app-edit-note">
        <form onSubmit={onEditNoteSubmit}>
          <p>
            <label>Username</label>
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={editNote.username}
              onChange={onEditNoteChange}
              required
            />
          </p>
          <p>
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={editNote.nickname}
              onChange={onEditNoteChange}
              required
            />
          </p>
          <p>
            <label>Age</label>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={editNote.age}
              onChange={onEditNoteChange}
              required
            />
          </p>
          <p>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={editNote.email}
              onChange={onEditNoteChange}
              required
            />
          </p>
          <p>
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={editNote.description}
              onChange={onEditNoteChange}
              required
            />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    )
  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h2>บันทึกความในใจ</h2>
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
        <div className="app-notes">
          {noteElement}
        </div>
      </div>
      {editNoteElement}
    </section>
  );
}

export default App;
