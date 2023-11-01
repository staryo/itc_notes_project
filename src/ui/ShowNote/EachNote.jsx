import NoteHeader from "./NoteHeader.jsx";

function EachNote({noteData, removeNoteFromList}) {
    return (
        <>
            <div key={noteData.identity} className="col-3">
                <div className="card bg-transparent text-white display-linebreak border-white box">
                    <NoteHeader removeNoteFromList={removeNoteFromList} noteData={noteData}/>
                    <div className="card-body">
                        <h5 className="card-title">{noteData.subject}</h5>
                        {noteData.text}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EachNote;
