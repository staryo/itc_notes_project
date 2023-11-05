import "./styles.css";
import CreateNote from "./ui/NoteEditor/CreateNote.jsx";
import {createContext, useEffect, useState} from "react";
import Notes from "./ui/ShowNote/Notes.jsx";
import NotesListClass from "./logic/NotesListClass.js";

export const NoteList = createContext(undefined);

function App() {

    const [noteListState, updateNotesList] = useState(() => {
        const saved = localStorage.getItem("noteList");
        const initialValue = JSON.parse(saved);
        return initialValue || {};
    });

    useEffect(() => {
        localStorage.setItem("noteList", JSON.stringify(noteListState));
    }, [noteListState]);

    return (
        <>
            <NoteList.Provider value={new NotesListClass(noteListState, updateNotesList)}>
                <div className="row w-100 my-1 g-3">
                    <div className="col p-3 rounded-2 box border">
                        <CreateNote/>
                    </div>
                </div>
                <div className="row w-100 my-1 g-3 p-0">
                    <div className="col p-3 rounded-2 box border">
                        <Notes/>
                    </div>
                </div>
            </NoteList.Provider>
        </>
    );
}

export default App;