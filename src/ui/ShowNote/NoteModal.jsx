import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import PropTypes from "prop-types";
import NoteForm from "../NoteEditor/NoteForm.jsx";
import {useContext, useEffect, useState} from "react";
import {NoteList, UpdateNoteList} from "../../App.jsx";

NoteModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    noteData: PropTypes.object,
};

function NoteModal({show, handleClose, noteData}) {
    const [textForNote, updateTextForNote] = useState(noteData.text);
    const [subjectForNote, updateSubjectForNote] = useState(noteData.subject);

    const notesList = useContext(NoteList)
    const updateNotesList = useContext(UpdateNoteList)

    const editNoteInList = (noteIdentity, subject, text) => {
        const newNotesList = {...notesList}
        newNotesList[noteIdentity] = {
            ...newNotesList[noteIdentity],
            subject,
            text,
            edit: new Date()
        };
        updateNotesList(
            newNotesList
        );
    };

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
