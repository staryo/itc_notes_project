import moment from "moment";

function Notes({notesList, updateNotesList}) {
    return (
        <>
            {
                notesList.toReversed().map((note) => {
                    return (
                        <div key={note.identity} className="col-3">
                            <div className="card bg-transparent text-white display-linebreak border-white box">
                                <div className="card-header border-white">
                                    <div className="row">
                                        <div className="col-9">
                                            {moment(note.date).calendar()}
                                        </div>
                                        <div className="col-3 text-end">
                                            <button type="button" className="btn-close btn-close-white"
                                                    aria-label="Close" onClick={() => {
                                                if (window.confirm("Do you really want to delete?")) {
                                                    updateNotesList(
                                                        notesList.filter(
                                                            (each) => each.identity !== note.identity
                                                        )
                                                    );
                                                }
                                            }}></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{note.subject}</h5>
                                    {note.text}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Notes;
