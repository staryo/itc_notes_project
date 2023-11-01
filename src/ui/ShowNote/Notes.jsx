import moment from "moment";

function Notes({notesList}) {

    return (
        <>
            {
                notesList.toReversed().map((note) => {
                    return (
                        <div key={note.identity} className="col-3">
                            <div className="card bg-transparent text-white display-linebreak border-white box">
                                <div className="card-header border-white">
                                    {moment(note.date).calendar()}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Note title</h5>
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
