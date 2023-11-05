import EachNote from "./EachNote.jsx";
import {useContext, useState} from "react";
import {NoteList} from "../../App.jsx";

function Notes() {
    const [isArchive, setArchive] = useState(false)
    const notesList = useContext(NoteList);

    return (
        <>
            <div className="row w-100 g-3">
                <div className="col">
                    <button
                        className={`btn btn-outline-light w-100 border-0 ${isArchive? "": "active"}`}
                        type="button"
                        onClick={() => setArchive(false)}
                    >
                        Actual
                    </button>
                </div>
                <div className="col">
                    <button
                        className={`btn btn-outline-light border-0 w-100 ${isArchive? "active": ""}`}
                        type="button"
                        onClick={() => setArchive(true)}
                    >
                        Archive
                    </button>
                </div>
            </div>
            <div className="row w-100 my-3 g-3">
                {
                    Object.values(notesList.notesList).toReversed().map((note) => {
                        if (note.archived === isArchive) {
                            return (
                                <EachNote
                                    key={note.identity}
                                    noteData={note}
                                />
                            );
                        }
                    })
                }
            </div>
        </>

    );
}

export default Notes;
