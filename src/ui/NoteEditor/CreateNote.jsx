import {useContext, useState} from "react";
import NoteForm from "./NoteForm.jsx";
import {NoteList} from "../../App.jsx";

function CreateNote() {
    const [textForNote, updateTextForNote] = useState("");
    const [subjectForNote, updateSubjectForNote] = useState("");

    const notesList = useContext(NoteList);

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
                                notesList.addNoteToList(textForNote, subjectForNote);
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
