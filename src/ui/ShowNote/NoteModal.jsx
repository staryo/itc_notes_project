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
};

function NoteModal({show, handleClose, noteData}) {
    const [textForNote, updateTextForNote] = useState(noteData.text);
    const [subjectForNote, updateSubjectForNote] = useState(noteData.subject);
    useEffect(() => {
        updateTextForNote(textForNote);
    }, [textForNote]);
    useEffect(() => {
        updateSubjectForNote(subjectForNote);
    }, [subjectForNote]);
    const handleSave = (text, subject) => {
        handleClose();
        noteData.text = text;
        noteData.subject = subject;
        noteData.edit = new Date();
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
                        handleSave(textForNote, subjectForNote);
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
