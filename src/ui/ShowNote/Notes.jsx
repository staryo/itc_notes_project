import EachNote from "./EachNote.jsx";
import {useContext} from "react";
import {NoteList} from "../../App.jsx";

function Notes() {
    const notesList = useContext(NoteList);

    return (
        <>
            <div className="row w-100 my-3 g-3">
                {
                    Object.values(notesList.notesList).toReversed().map((note) => {
                        return (
                            <EachNote
                                key={note.identity}
                                noteData={note}
                            />
                        );
                    })
                }
            </div>
        </>

    );
}

export default Notes;
