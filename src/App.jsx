import "./styles.css";
import CreateNote from "./ui/NoteEditor/CreateNote.jsx";
import {createContext, useEffect, useState} from "react";
import Notes from "./ui/ShowNote/Notes.jsx";

export const NoteList = createContext([]);
export const UpdateNoteList = createContext((key) => key);

function App() {

    const [noteList, updateNotesList] = useState(() => {
        const saved = localStorage.getItem("noteList");
        const initialValue = JSON.parse(saved);
        return initialValue || {};
    });


    useEffect(() => {
        localStorage.setItem("noteList", JSON.stringify(noteList));
    }, [noteList]);

    return (
        <>
            <NoteList.Provider value={noteList}>
                <UpdateNoteList.Provider value={updateNotesList}>
                    <div className="row w-100 my-3 g-3">
                        <div className="col">
                            <div className="p-3 rounded-2 box border">
                                <CreateNote/>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 g-3">
                        <Notes/>
                    </div>
                </UpdateNoteList.Provider>
            </NoteList.Provider>
        </>
    );
}

export default App;