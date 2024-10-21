import PropTypes from 'prop-types';
import '../App.css';

const CreateNote = ({
  title,
  content,
  setInputText,
  setInputContent,
  saveHandler,
}) => {
  return (
    <>
      <div className="create-note">
        <h2>Create note</h2>
        <form action="">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              e.preventDefault();
              //   console.log(e.target.value);
              setInputText(e.target.value);
            }}
          />
          <textarea
            name="content"
            id="content"
            placeholder="Content..."
            value={content}
            onChange={(e) => {
              e.preventDefault();
              //   console.log(e.target.value);
              setInputContent(e.target.value);
            }}
            rows={10}
          ></textarea>
          <button className="btn_save" onClick={saveHandler}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;

CreateNote.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  setInputContent: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
};
