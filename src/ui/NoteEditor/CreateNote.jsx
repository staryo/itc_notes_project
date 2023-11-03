import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import NoteForm from "./NoteForm.jsx";
import {NoteList, UpdateNoteList} from "../../App.jsx";

CreateNote.propTypes = {
    notesList: PropTypes.array,
    updateNotesList: PropTypes.func,
};

function CreateNote() {
    const [textForNote, updateTextForNote] = useState("");
    const [subjectForNote, updateSubjectForNote] = useState("");
    const notesList = useContext(NoteList)
    const updateNotesList = useContext(UpdateNoteList)
    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    useEffect(() => {
        updateSubjectForNote(subjectForNote);
    }, [subjectForNote]);
    return (
        <>
            <NoteForm
                textForNote={textForNote}
                subjectForNote={subjectForNote}
                updateTextForNote={updateTextForNote}
                updateSubjectForNote={updateSubjectForNote}
            />
            <div className="row my-2">
                <div className="col">
                    <button type="button"
                            className={`w-100 btn btn-outline-light btn-lg btn-block ${textForNote === "" ? "disabled" : ""}`}
                            onClick={() => {
                                updateNotesList([...notesList, {
                                    "identity": Date.now(),
                                    "text": textForNote,
                                    "date": new Date(),
                                    "edit": null,
                                    "subject": subjectForNote
                                }]);
                                updateTextForNote("");
                                updateSubjectForNote("");
                            }}>
                        Add note
                    </button>
                </div>
            </div>
        </>
    );
}

export default CreateNote;
