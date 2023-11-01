import NoteHeader from "./NoteHeader.jsx";
import NoteModal from "./NoteModal.jsx";
import {useState} from "react";

function EachNote({noteData, removeNoteFromList}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div key={noteData.identity} className="col-3" onClick={handleShow}>
                <div className="card bg-transparent text-white display-linebreak border-white box">
                    <NoteHeader removeNoteFromList={removeNoteFromList} noteData={noteData}/>
                    <div className="card-body">
                        <h5 className="card-title">{noteData.subject}</h5>
                        {noteData.text}
                    </div>
                </div>
            </div>
            <NoteModal show={show} handleClose={handleClose} noteData={noteData}/>
        </>
    );
}

export default EachNote;
