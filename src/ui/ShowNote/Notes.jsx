import EachNote from "./EachNote.jsx";
import PropTypes from "prop-types";
import {useContext} from "react";
import {NoteList, UpdateNoteList} from "../../App.jsx";

Notes.propTypes = {
    notesList: PropTypes.array,
    updateNotesList: PropTypes.func,
};

function Notes() {
    const notesList = useContext(NoteList)
    const updateNotesList = useContext(UpdateNoteList)

    const removeNoteFromList = (noteIdentity) => {
        updateNotesList(
            notesList.filter(
                (each) => each.identity !== noteIdentity
            )
        );
    };

    const editNoteInList = (noteIdentity, subject, text) => {
        const noteToEdit = notesList.filter(
            (each) => each.identity === noteIdentity
        )[0];
        noteToEdit.subject = subject;
        noteToEdit.text = text;
        noteToEdit.edit = new Date();
        updateNotesList(
            [
                ...notesList.filter(
                    (each) => each.identity !== noteIdentity
                ),
                noteToEdit
            ]
        );
    };

    return (
        <>
            {
                notesList.toReversed().map((note) => {
                    return (
                        <EachNote
                            key={note.identity}
                            removeNoteFromList={removeNoteFromList}
                            noteData={note}
                            editNoteInList={editNoteInList}
                        />
                    );
                })
            }
        </>
    );
}

export default Notes;
