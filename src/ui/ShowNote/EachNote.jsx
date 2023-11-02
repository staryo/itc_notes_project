import NoteHeader from "./NoteHeader.jsx";
import NoteModal from "./NoteModal.jsx";
import {useState} from "react";
import moment from "moment";

function EachNote({noteData, removeNoteFromList}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div key={noteData.identity} className="col-4" onClick={handleShow}>
                <div className="card bg-transparent text-white display-linebreak border-white box">
                    <NoteHeader removeNoteFromList={removeNoteFromList} noteData={noteData}/>
                    <div className="card-body">
                        {noteData.text}
                        <p className="card-text">
                            <small className="text-white-50">
                                Created: {moment(noteData.date).calendar()}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <NoteModal show={show} handleClose={handleClose} noteData={noteData}/>
        </>
    );
}

export default EachNote;
