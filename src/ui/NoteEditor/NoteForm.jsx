import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";

NoteForm.propTypes = {
    subjectForNote: PropTypes.string,
    updateSubjectForNote: PropTypes.func,
    textForNote: PropTypes.string,
    updateTextForNote: PropTypes.func,
};

function NoteForm({subjectForNote, updateSubjectForNote, textForNote, updateTextForNote}) {
    return (
        <>
            <div className="row my-2">
                <div className="col">
                    <input className="w-100 p-3 bg-white text-black rounded-3 border-0" value={subjectForNote}
                           onChange={
                               (currentValue) =>
                                   updateSubjectForNote(currentValue.target.value)
                           } placeholder="Subject">
                    </input>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <TextareaAutosize minRows="5" maxRows="20" id="no-resize"
                                      className="w-100 p-3 bg-white text-black rounded-3 border-0"
                                      value={textForNote}
                                      onChange={
                                          (currentValue) =>
                                              updateTextForNote(currentValue.target.value)
                                      }
                                      placeholder="Add new note here"/>
                </div>
            </div>
        </>
    );
}

export default NoteForm;