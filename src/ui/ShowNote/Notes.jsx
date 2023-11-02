import EachNote from "./EachNote.jsx";
import PropTypes from "prop-types";

Notes.propTypes = {
    notesList: PropTypes.array,
    updateNotesList: PropTypes.func,
};

function Notes({notesList, updateNotesList}) {
    function removeNoteFromList(noteIdentity) {
        updateNotesList(
            notesList.filter(
                (each) => each.identity !== noteIdentity
            )
        );
    }

    return (
        <>
            {
                notesList.toReversed().map((note) => {
                    return (
                        <EachNote key={note.identity} removeNoteFromList={removeNoteFromList} noteData={note}/>
                    );
                })
            }
        </>
    );
}

export default Notes;
