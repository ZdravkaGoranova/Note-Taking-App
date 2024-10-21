import PropTypes from 'prop-types';
import '../App.css';

const CreateNote = ({ setInputText, setInputContent, saveHandler }) => {
  return (
    <>
      <div className="create-note">
        <h2>Create note</h2>
        <form action="" onClick={saveHandler}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
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
            onChange={(e) => {
              e.preventDefault();
              //   console.log(e.target.value);
              setInputContent(e.target.value);
            }}
            rows={10}
          ></textarea>
          <button className="btn_save">Save</button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;

CreateNote.propTypes = {
  setInputText: PropTypes.func.isRequired,
  setInputContent: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
};
