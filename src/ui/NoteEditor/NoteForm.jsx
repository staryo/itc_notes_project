import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";

NoteForm.propTypes = {
    subjectForNote: PropTypes.string,
    updateSubjectForNote: PropTypes.func,
    textForNote: PropTypes.string,
    updateTextForNote: PropTypes.func,
    disabled: PropTypes.bool,
};

function NoteForm({subjectForNote, updateSubjectForNote, textForNote, updateTextForNote, disabled=false}) {
    return (
        <>
            <div className="row my-2">
                <div className="col">
                    <input
                        className="w-100 p-3 bg-white text-black rounded-3 border-0 h3"
                        value={subjectForNote}
                        disabled={disabled}
                        onChange={
                            (currentValue) =>
                                updateSubjectForNote(currentValue.target.value)
                        } placeholder="Subject"
                    />
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <TextareaAutosize
                        minRows="5"
                        maxRows="20"
                        className="w-100 p-3 bg-white text-black rounded-3 border-0 no-resize"
                        disabled={disabled}
                        value={textForNote}
                        onChange={
                            (currentValue) =>
                                updateTextForNote(currentValue.target.value)
                        }
                        placeholder="Add new note here"
                    />
                </div>
            </div>
        </>
    );
}

export default NoteForm;