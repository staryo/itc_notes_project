import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import PropTypes from "prop-types";
import NoteForm from "../NoteEditor/NoteForm.jsx";
import {useEffect, useState} from "react";

NoteModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    noteData: PropTypes.object,
    editNoteInList: PropTypes.func,
};

function NoteModal({show, handleClose, noteData, editNoteInList}) {
    const [textForNote, updateTextForNote] = useState(noteData.text);
    const [subjectForNote, updateSubjectForNote] = useState(noteData.subject);
    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    useEffect(() => {
        updateSubjectForNote(subjectForNote);
    }, [subjectForNote]);
    const handleSave = (identity, subject, text) => {
        handleClose();
        editNoteInList(identity, subject, text)
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    Created: {moment(noteData.date).calendar()}
                </Modal.Header>
                <Modal.Body>
                    <NoteForm
                        textForNote={textForNote}
                        subjectForNote={subjectForNote}
                        updateTextForNote={updateTextForNote}
                        updateSubjectForNote={updateSubjectForNote}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        handleSave(noteData.identity, subjectForNote, textForNote);
                    }}>
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
