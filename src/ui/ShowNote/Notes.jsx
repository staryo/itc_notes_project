import EachNote from "./EachNote.jsx";
import {useContext} from "react";
import {NoteList} from "../../App.jsx";

function Notes() {
    const notesList = useContext(NoteList);

    return (
        <>
            {
                Object.values(notesList).toReversed().map((note) => {
                    return (
                        <EachNote
                            key={note.identity}
                            noteData={note}
                        />
                    );
                })
            }
        </>
    );
}

export default Notes;
