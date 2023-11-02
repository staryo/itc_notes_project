import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import PropTypes from "prop-types";

NoteModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    noteData: PropTypes.object
};

function NoteModal({show, handleClose, noteData}) {
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    {moment(noteData.date).calendar()}
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>{noteData.subject}</Modal.Title>
                    {noteData.text}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NoteModal;
