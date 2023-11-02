import EachNote from "./EachNote.jsx";
import PropTypes from "prop-types";

Notes.propTypes = {
    notesList: PropTypes.array,
    updateNotesList: PropTypes.func,
};

function Notes({notesList, updateNotesList}) {
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
