function NoteTextArea() {
    return (
        <>
            <p className="m-0 p-3 text-center text-white">
                <div className="row">
                    <div className="col">
                        <textarea className="w-100"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="w-100">Send</button>
                    </div>
                </div>
            </p>
        </>
    );
}

export default NoteTextArea;
