import {useEffect, useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';

function NoteTextArea({notesList, updateNotesList}) {
    const [textForNote, updateTextForNote] = useState("");
    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    return (
        <>
            <div className="row">
                <div className="col">
                    <TextareaAutosize minRows="5" maxRows="20" id="no-resize" className="w-100 p-3 bg-white text-black rounded-3 border-0" value={textForNote}
                              onChange={
                                  (currentValue) =>
                                      updateTextForNote(currentValue.target.value)
                              } placeholder="Add new note here">
                    </TextareaAutosize>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="button"
                            className={`w-100 btn btn-outline-light btn-lg btn-block ${textForNote === "" ? "disabled" : ""}`}
                            onClick={() => {
                                updateNotesList([...notesList, {
                                    "identity": notesList.length,
                                    "text": textForNote,
                                    "date": new Date()
                                }]);
                                updateTextForNote("");
                            }}>Send
                    </button>
                </div>
            </div>
        </>
    );
}

export default NoteTextArea;
