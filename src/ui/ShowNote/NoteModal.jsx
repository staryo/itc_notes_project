import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import PropTypes from "prop-types";
import NoteForm from "../NoteEditor/NoteForm.jsx";
import {useContext, useEffect, useState} from "react";
import {NoteList} from "../../App.jsx";

NoteModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    noteData: PropTypes.object,
};

function NoteModal({show, handleClose, noteData}) {
    const [textForNote, updateTextForNote] = useState(noteData.text);
    const [subjectForNote, updateSubjectForNote] = useState(noteData.subject);

    const notesList = useContext(NoteList);

    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    useEffect(() => {
        updateSubjectForNote(subjectForNote);
    }, [subjectForNote]);

    const handleSave = (identity, subject, text) => {
        handleClose();
        notesList.editNoteInList(identity, subject, text);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <div className="p-1 small">
                        Created: {moment(noteData.date).calendar()}
                    </div>
                    <div className="p-1 small text-black-50">
                        {noteData.edit
                            ? `(Last updated: ${moment(noteData.edit).fromNow()})`
                            : ""
                        }
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <NoteForm
                        textForNote={textForNote}
                        subjectForNote={subjectForNote}
                        updateTextForNote={updateTextForNote}
                        updateSubjectForNote={updateSubjectForNote}
                        disabled={noteData.archived}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSave(noteData.identity, subjectForNote, textForNote);
                        }}
                        className={noteData.archived ? "d-none" : ""}
                    >
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NoteModal;
