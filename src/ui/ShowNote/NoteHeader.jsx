import PropTypes from "prop-types";

NoteHeader.propTypes = {
    noteData: PropTypes.object,
    removeNoteFromList: PropTypes.func,
};

function NoteHeader({noteData, removeNoteFromList}) {
    return (
        <>
            <div className="card-header border-white">
                <div className="row">
                    <div className="col-9 h5">
                        {noteData.subject.toUpperCase()}
                    </div>
                    <div className="col-3 text-end">
                        <button type="button" className="btn-close btn-close-white"
                                aria-label="Close" onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm("Do you really want to delete?")) {
                                removeNoteFromList(noteData.identity);
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoteHeader;
