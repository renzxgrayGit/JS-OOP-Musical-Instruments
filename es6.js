class Note {
    /* Static array containing valid note names */
    static nameList = ["do", "re", "mi", "fa", "sol", "la", "ti"];
    
    /* Constructor for Note class */
    constructor(name, pitch) {
        this.name = name;
        this.pitch = Math.max(1, Math.min(7, pitch)); // Ensure pitch is between 1 and 7
    }
    
    /* Method to show information about the note */
    show() {
        console.log(`Note: ${this.name}, Pitch: ${this.pitch}`);
    }
}
    
/* Example usage: */
const myNote = new Note("re", 3);
myNote.show();
console.log('');
    
class Instrument {
    /* Constructor for Instrument class */
    constructor() {
        this.record = [];
    }

    /* Method to add a new note to the record */
    addNote(name, pitch) {
        const newNote = new Note(name, pitch);
        this.record.push(newNote);
    }

    /* Method to remove the last note from the record */
    removeLastNote() {
        this.record.pop();
    }

    /* Method to change a note in the record by index */
    changeNote(index, name, pitch) {
        if (index >= 0 && index < this.record.length) {
            this.record[index] = new Note(name, pitch);
        } 
        else {
            console.log("Invalid index provided.");
        }
    }

    /* Method to shuffle the notes in the record */
    shuffleRecord() {
        this.record = this.shuffle(this.record);
    }

    /* Method to shuffle an array */
    shuffle(array) {
        const copy = [];
        let n = array.length;
        let i;

        while (n) {
            i = Math.floor(Math.random() * array.length);
            if (i in array) {
                copy.push(array[i]);
                delete array[i];
                n--;
            }
        }

        return copy;
    }

    /* Method to auto-compose and record notes */
    autoCompose(num) {
        this.record = [];
        for (let i = 0; i < num; i++) {
            const name = this.getRandomNoteName();
            const pitch = Math.floor(Math.random() * 7) + 1;
            this.addNote(name, pitch);
        }
    }

    /* Method to get a random note name from the Note class's nameList */
    getRandomNoteName() {
        return Note.nameList[Math.floor(Math.random() * Note.nameList.length)];
    }

    /* Method to log the recorded notes */
    logRecord() {
        console.log("Recorded Notes:");
        this.record.forEach((note, index) => {
            console.log(`Note ${index + 1}: ${note.name} - Pitch ${note.pitch}`);
        });
    }
}
    
/* Example usage: */
const myInstrument = new Instrument();
myInstrument.addNote("do", 1);
myInstrument.addNote("re", 2);
myInstrument.addNote("mi", 3);
myInstrument.logRecord(); // Logs the recorded notes
myInstrument.removeLastNote();
myInstrument.changeNote(1, "re", 5);
myInstrument.shuffleRecord();
myInstrument.logRecord(); // Logs the modified and shuffled recorded notes
myInstrument.autoCompose(4);
myInstrument.logRecord(); // Logs the auto-composed recorded notes
    