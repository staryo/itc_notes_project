import "./styles.css";
import CreateNote from "./ui/NoteEditor/CreateNote.jsx";
import {useEffect, useState} from "react";
import Notes from "./ui/ShowNote/Notes.jsx";

function App() {

    const [noteList, updateNotesList] = useState(() => {
        const saved = localStorage.getItem("noteList");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        localStorage.setItem("noteList", JSON.stringify(noteList));
    }, [noteList]);

    return (
        <>
            <div className="row w-100 my-3 g-3">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <CreateNote notesList={noteList} updateNotesList={updateNotesList}></CreateNote>
                    </div>
                </div>
            </div>
            <div className="row w-100 g-3">
                <Notes
                    notesList={noteList}
                    updateNotesList={updateNotesList}
                ></Notes>
            </div>

        </>
    );
}

export default App;
