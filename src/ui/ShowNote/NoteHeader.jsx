import PropTypes from "prop-types";
import {useContext} from "react";
import {NoteList} from "../../App.jsx";
import {Archive, SkipBackward, XLg} from "react-bootstrap-icons";

NoteHeader.propTypes = {
    noteData: PropTypes.object,
};

function NoteHeader({noteData}) {
    const notesList = useContext(NoteList);

    return (
        <>
            <div className="card-header border-white">
                <div className="row g-3">
                    <div className="col h5">
                        {noteData.subject.toUpperCase()}
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <div
                            className="btn darkgrey d-flex align-items-center px-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (noteData.archived) notesList.activateNoteFromList(noteData.identity);
                                else if (!noteData.archived) notesList.archiveNoteFromList(noteData.identity);
                            }}
                        >
                            {noteData.archived ? <SkipBackward/> : <Archive/>}
                        </div>
                        <div
                            className="btn darkgrey d-flex align-items-center px-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (window.confirm("Do you really want to delete?")) {
                                    notesList.removeNoteFromList(noteData.identity);
                                }
                            }}
                        >
                            <XLg/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoteHeader;
