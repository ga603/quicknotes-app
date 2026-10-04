// ==========================================
// Select HTML Elements
// ==========================================

const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");


// ==========================================
// Load Notes from localStorage
// ==========================================

let notes = JSON.parse(localStorage.getItem("quickNotes")) || [];


// ==========================================
// Save Notes to localStorage
// ==========================================

function saveNotes() {
    localStorage.setItem("quickNotes", JSON.stringify(notes));
}


// ==========================================
// Update Note Count
// ==========================================

function updateCount() {

    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } 
    else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } 
    else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }
}


// ==========================================
// Render Notes
// ==========================================

function render(searchTerm = "") {

    // Clear the current list
    notesList.textContent = "";

    // Convert search term to lowercase
    const search = searchTerm.trim().toLowerCase();

    // Filter notes according to search
    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(search)
    );


    // If search gives no results
    if (filteredNotes.length === 0 && search !== "") {

        const message = document.createElement("li");

        message.textContent = "No notes match your search.";

        notesList.appendChild(message);

    } 
    else {

        // Create a card for each note
        filteredNotes.forEach(note => {

            const noteCard = document.createElement("li");

            noteCard.classList.add(
                "note-card",
                `category-${note.category}`
            );


            // Note text
            const noteText = document.createElement("p");

            noteText.classList.add("note-text");

            noteText.textContent = note.text;


            // Category label
            const categoryLabel = document.createElement("span");

            categoryLabel.classList.add("note-category");

            categoryLabel.textContent = note.category;


            // Creation date
            const date = document.createElement("p");

            date.classList.add("note-date");

            date.textContent = `Created: ${note.createdAt}`;


            // Delete button
            const deleteButton = document.createElement("button");

            deleteButton.type = "button";

            deleteButton.classList.add("delete-btn");

            deleteButton.textContent = "Delete";


            // Delete this note
            deleteButton.addEventListener("click", function () {

                notes = notes.filter(item => item.id !== note.id);

                saveNotes();

                render(searchInput.value);

            });


            // Build note card
            noteCard.appendChild(noteText);

            noteCard.appendChild(categoryLabel);

            noteCard.appendChild(date);

            noteCard.appendChild(deleteButton);


            // Add note card to list
            notesList.appendChild(noteCard);

        });
    }


    // Update count
    updateCount();
}


// ==========================================
// Add Note
// ==========================================

noteForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get the input value
    const text = noteInput.value.trim();

    const category = noteCategory.value;


    // Clear previous error
    errorMessage.textContent = "";


    // Validate empty note
    if (text === "") {

        errorMessage.textContent = "Please type a note first.";

        return;
    }


    // Validate maximum length
    if (text.length > 200) {

        errorMessage.textContent =
            "Notes must be 200 characters or fewer.";

        return;
    }


    // Create new note object
    const newNote = {

        id: Date.now(),

        text: text,

        category: category,

        createdAt: new Date().toLocaleString()

    };


    // Add note to array
    notes.push(newNote);


    // Save notes
    saveNotes();


    // Clear input
    noteInput.value = "";


    // Clear error
    errorMessage.textContent = "";


    // Display notes
    render();

});


// ==========================================
// Search
// ==========================================

searchInput.addEventListener("input", function () {

    render(searchInput.value);

});


// ==========================================
// Initial Page Load
// ==========================================

render();