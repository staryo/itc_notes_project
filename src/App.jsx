import "./styles.css";
import NoteTextArea from "./ui/CreateNote/NoteTextArea.jsx";

function App() {

    return (
        <>
            <div className="row w-100 mb-sm-3 mb-2">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <NoteTextArea></NoteTextArea>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
