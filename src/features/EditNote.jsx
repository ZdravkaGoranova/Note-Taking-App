import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {  useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditNote = ({ id, title, content, notes, setNotes, setEditToggle }) => {
  //   const location = useLocation();
  const navigate = useNavigate();
  //   debugger;
  //   const { id, title, content, notes, setNotes } = location.state || '';

  //   const [editedTitle, setEditedTitle] = useState(title || '');
  //   const [editedContent, setEditedContent] = useState(content || '');

  const [editedTitle, setEditedTitle] = useState(title || '');
  const [editedContent, setEditedContent] = useState(content || '');

  useEffect(() => {
    if (title !== undefined) setEditedTitle(title);
    if (content !== undefined) setEditedContent(content);
  }, [title, content]);

  const handleSave = async (e) => {
    e.preventDefault();

    console.log('Saved note:', { id, editedTitle, editedContent });

    if (editedTitle.trim() === '') {
      toast.error('editedTitle is required !');
      return;
    }
    if (editedContent.trim() === '') {
      toast.error('editedContent is required!');
      return;
    }

    if (editedTitle !== '' && editedContent !== '') {
      const updatedNotes = notes.map((note) =>
        note.id === id
          ? {
              ...note,
              title: editedTitle,
              content: editedContent,
            }
          : note,
      );
      const saveNotes = async () => {
        return new Promise((resolve) => {
          setNotes(updatedNotes);
          resolve();
        });
      };
      await saveNotes();
      toast.success(`This Note whit id:${id} is update Successfull!`, {
        position: 'top-center',
      });
    }
    setEditedTitle('');
    setEditedContent('');
    setEditToggle('false');

    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="create-note">
      <h2>Edit Note</h2>
      <form>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          rows="10"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        ></textarea>
        <button onClick={handleSave}>Save</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditNote;

EditNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
  setEditToggle: PropTypes.func.isRequired,
};
