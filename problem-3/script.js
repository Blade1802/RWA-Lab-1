document.addEventListener("DOMContentLoaded", function () {
    const colorSelector = document.getElementById("color-picker");
    const noteText = document.getElementById("note-text");
    const addNoteButton = document.getElementById("add-button");
    const notesList = document.getElementById("notes-list");

    // Modal elements
    const editModal = document.getElementById("editModal");
    const editColorSelector = document.getElementById("edit-color-picker");
    const editNoteText = document.getElementById("edit-note-text");
    const saveButton = document.getElementById("save-button");
    let editingNote = null;

    // Function to create a note
    function createNote(color, text) {
        const note = document.createElement("div");
        note.className = "note";
        note.style.backgroundColor = color;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", function () {
            notesList.removeChild(note);
        });

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.innerText = "Edit";

        editButton.addEventListener("click", function () {
            editingNote = note;
            const noteText = note.querySelector("p").innerText;
            const noteColor = note.style.backgroundColor;

            editNoteText.value = noteText;
            // editColorSelector.value = noteColor; // Set the edit color selector to the note's color
            editColorSelector.value = "#00ff00"; // Hardcoded, to be fixed by converting rgb value to hex

            editModal.style.display = "block";
        });

        const noteTextElement = document.createElement("p");
        noteTextElement.innerText = text;
        note.appendChild(noteTextElement);
        note.appendChild(deleteButton);
        note.appendChild(editButton);

        notesList.appendChild(note);
    }

    // Event listener for adding a note
    addNoteButton.addEventListener("click", function () {
        const color = colorSelector.value; // Get the selected color
        const text = noteText.value;

        if (text.trim() === "") {
            alert("Please enter a note.");
            return;
        }

        createNote(color, text);
        noteText.value = "";
    });

    // Event listener for saving an edited note
    saveButton.addEventListener("click", function () {
        if (editingNote) {
            const updatedColor = editColorSelector.value; // Get the selected edit color
            const updatedText = editNoteText.value;

            if (updatedText.trim() === "") {
                alert("Please enter a note.");
                return;
            }

            editingNote.style.backgroundColor = updatedColor;
            editingNote.querySelector("p").innerText = updatedText;

            editModal.style.display = "none";
        }
    });

    // Event listener for closing the edit modal
    editModal.querySelector(".close").addEventListener("click", function () {
        editModal.style.display = "none";
    });

    // Event listener for clicking outside the edit modal
    window.addEventListener("click", function (e) {
        if (e.target === editModal) {
            editModal.style.display = "none";
        }
    });
});
