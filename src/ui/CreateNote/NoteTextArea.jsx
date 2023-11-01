import {useEffect, useState} from "react";

function NoteTextArea({notesList, updateNotesList}) {
    const [textForNote, updateTextForNote] = useState("")
    useEffect(() => {
        updateTextForNote(textForNote)
    }, [textForNote])
    return (
        <>
            <div className="row">
                <div className="col">
                    <textarea className="w-100 p-3 bg-white text-black rounded-3 border-0" value={textForNote} onChange={
                        (currentValue) =>
                            updateTextForNote(currentValue.target.value)
                    }></textarea>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="button" className="w-100 btn btn-outline-light btn-lg btn-block" onClick={() => {
                        updateNotesList([...notesList, {
                            'identity': notesList.length,
                            'text': textForNote
                        }])
                        updateTextForNote('')
                    }}>Send</button>
                </div>
            </div>
        </>
    );
}

export default NoteTextArea;
