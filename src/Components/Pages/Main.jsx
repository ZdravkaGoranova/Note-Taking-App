import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import CreateNote from '../../features/CreateNote.jsx';
import { v4 as uuid } from 'uuid';
import { Note } from '../../features/Note.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditNote from '../../features/EditNote.jsx';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState('false');
  const [curretEditNote, setCurretEditNote] = useState('');

  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Note-Talking'));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Note-Talking', JSON.stringify(notes));
  }, [notes]);

  const editHandler = (id) => {
    const currentNote = notes.filter((note) => note.id === id);
    setCurretEditNote(currentNote[0]);
    console.log(currentNote[0]);
    console.log(currentNote[0].title);

    // const notesObject = currentNote.reduce((acc, note) => {
    //   acc[note.id] = note;
    //   return acc;
    // }, {});
    // console.log(notesObject[id].title);

    // navigate(`/edit/${id}`, {
    //   state: {
    //     id,
    //     title: currentNote[0].title,
    //     content: currentNote[0].content,
    //     notes: notes,
    //     setNotes: setNotes,
    //   },
    // });
    setEditToggle('true');
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    if (newNotes) {
      setNotes(newNotes);
      toast.info(`The Note whit ID:${id} was deleted!`);
    }
  };
  const saveHandler = (e) => {
    e.preventDefault();

    if (inputText.trim() === '') {
      toast.error('InputText is required !');
      //  throw new Error('InputText is required!');
      return;
    }
    if (inputContent.trim() === '') {
      toast.error('InputContent is required!');
      // throw new Error('InputContent is required!');
      return;
    }

    if (inputText !== '' && inputContent !== '') {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          key: uuid(),
          title: inputText,
          content: inputContent,
        },
      ]);

      // toast('Success: This note is save Successfull!');
      toast.success('This Note is save Successfull!', {
        position: 'top-center',
      });
      setInputText('');
      setInputContent('');
    }

    // setInputText(e.target.value);
    // setInputContent(e.target.value);
  };

  return (
    <>
      <main>
        {/* {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          ></Note>
        ))} */}
        {editToggle === 'false' ? (
          <>
            <CreateNote
              // id={uuid()}
              // key={uuid()}
              title={inputText}
              content={inputContent}
              setInputText={setInputText}
              setInputContent={setInputContent}
              saveHandler={saveHandler}
            ></CreateNote>

            <div className="note-list">
              <h3>Notes List:</h3>
              {notes.length > 0 ? (
                notes.map((note) => (
                  <>
                    <Note
                      id={note.id}
                      key={note.id}
                      title={note.title}
                      content={note.content}
                      editHandler={editHandler}
                      deletHandler={deleteHandler}
                    ></Note>
                  </>
                ))
              ) : (
                <>
                  <p className="list-empty">Note List is empty!</p>
                </>
              )}
            </div>
          </>
        ) : (
          <EditNote
            id={curretEditNote.id}
            title={curretEditNote.title}
            content={curretEditNote.content}
            notes={notes}
            setNotes={setNotes}
            setEditToggle={setEditToggle}
          ></EditNote>
        )}

        <ToastContainer />
      </main>
    </>
  );
};

export default Main;
