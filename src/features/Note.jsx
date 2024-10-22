import PropTypes from 'prop-types';


export const Note = ({ id, title, content, editHandler, deletHandler }) => {
  return (
    <>
      <div className="note">
        <div className="note-body">Title: {title}</div>
        <div className="note-content">{content}</div>
        <div className="note-footer">
          <button
            className="note_save"
            onClick={() => {
              editHandler(id);
            }}
          >
            Edit
          </button>
          <button
            className="note_save"
            onClick={() => {
              deletHandler(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  editHandler: PropTypes.func.isRequired,
  deletHandler: PropTypes.func.isRequired,
};
