import {useEffect, useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';

function NoteTextArea({notesList, updateNotesList}) {
    const [textForNote, updateTextForNote] = useState("");
    const [subjectForNote, updateSubjectForNote] = useState("");
    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    useEffect(() => {
        updateSubjectForNote(subjectForNote);
    }, [subjectForNote]);
    return (
        <>
            <div className="row my-2">
                <div className="col">
                    <input className="w-100 p-3 bg-white text-black rounded-3 border-0" value={subjectForNote}
                                      onChange={
                                          (currentValue) =>
                                              updateSubjectForNote(currentValue.target.value)
                                      } placeholder="Subject">
                    </input>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <TextareaAutosize minRows="5" maxRows="20" id="no-resize" className="w-100 p-3 bg-white text-black rounded-3 border-0" value={textForNote}
                              onChange={
                                  (currentValue) =>
                                      updateTextForNote(currentValue.target.value)
                              } placeholder="Add new note here">
                    </TextareaAutosize>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    <button type="button"
                            className={`w-100 btn btn-outline-light btn-lg btn-block ${textForNote === "" ? "disabled" : ""}`}
                            onClick={() => {
                                updateNotesList([...notesList, {
                                    "identity": Date.now(),
                                    "text": textForNote,
                                    "date": new Date(),
                                    "subject": subjectForNote
                                }]);
                                updateTextForNote("");
                                updateSubjectForNote("");
                            }}>Send
                    </button>
                </div>
            </div>
        </>
    );
}

export default NoteTextArea;
