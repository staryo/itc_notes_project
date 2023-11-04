export default class NotesListClass {
    constructor(notesList, updateNotesList) {
        this.notesList = notesList;
        this.updateNotesList = updateNotesList;
    }

    removeNoteFromList(noteIdentity) {
        const newNotesList = {...this.notesList};
        delete newNotesList[noteIdentity];
        this.updateNotesList(newNotesList);
    }

    archiveNoteFromList(noteIdentity) {
        const newNotesList = {...this.notesList};
        newNotesList[noteIdentity] = {
            ...newNotesList[noteIdentity],
            archived: true
        };
        this.updateNotesList(
            newNotesList
        );
    }

    activateNoteFromList(noteIdentity) {
        const newNotesList = {...this.notesList};
        newNotesList[noteIdentity] = {
            ...newNotesList[noteIdentity],
            archived: false
        };
        this.updateNotesList(
            newNotesList
        );
    }

    editNoteInList(noteIdentity, subject, text) {
        const newNotesList = {...this.notesList};
        if (newNotesList[noteIdentity].subject === subject && newNotesList[noteIdentity].text === text) return;
        newNotesList[noteIdentity] = {
            ...newNotesList[noteIdentity],
            subject,
            text,
            edit: new Date()
        };
        this.updateNotesList(
            newNotesList
        );
    }

    addNoteToList(textForNote, subjectForNote) {
        const identity = Date.now();
        const newNotesList = {...this.notesList};
        newNotesList[identity] = {
            "identity": Date.now(),
            "text": textForNote,
            "date": new Date(),
            "edit": null,
            "subject": subjectForNote,
            "archived": false
        };
        this.updateNotesList(newNotesList);
    }

}

