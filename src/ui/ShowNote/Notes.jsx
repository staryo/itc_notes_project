function Notes({notesList}) {
    return (
        <>
            {
                notesList.toReversed().map((note) => {
                    return (
                        <div key={note.identity} className="col-3">
                            <div className="p-3 box text-white border rounded-3 display-linebreak">
                                {note.text}
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Notes;
