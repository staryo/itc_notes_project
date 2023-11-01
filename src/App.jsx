import "./styles.css";
import NoteTextArea from "./ui/CreateNote/NoteTextArea.jsx";
import {useState} from "react";
import Notes from "./ui/ShowNote/Notes.jsx";

function App() {
    const [noteList, updateNoteList] = useState([]);
    return (
        <>
            <div className="row w-100 my-3 g-3">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <NoteTextArea notesList={noteList} updateNotesList={updateNoteList}></NoteTextArea>
                    </div>
                </div>
            </div>
            <div className="row w-100 g-3">
                <Notes notesList={noteList}></Notes>
            </div>

        </>
    );
}

export default App;
