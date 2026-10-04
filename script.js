const stylesheet = `
   This file was accidentally written as CSS while named script.js.
   The CSS is kept inside a JS block comment so the file parses correctly.

/* ==========================================
   Box-Sizing Reset
   ========================================== */

* {
    box-sizing: border-box;
}


/* ==========================================
   Body
   ========================================== */

body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;

    background-color: #f4f6f8;
    color: #333;
}


/* ==========================================
   Header
   ========================================== */

header {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 35px 20px;
}

header h1 {
    margin: 0 0 5px;
    font-size: 2.3rem;
}

header p {
    margin: 0;
}


/* ==========================================
   Main
   ========================================== */

main {
    max-width: 700px;
    margin: 30px auto;
    padding: 0 20px;
}


/* ==========================================
   Sections
   ========================================== */

section {
    background-color: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 10px;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

section h2 {
    margin-top: 0;
}


/* ==========================================
   Form
   ========================================== */

#note-form {
    display: flex;
    align-items: end;
    gap: 12px;
    flex-wrap: wrap;
}

.form-group {
    flex: 1;
    min-width: 180px;
}

.form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
}

input,
select {
    width: 100%;
    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 5px;

    font: inherit;
}


/* ==========================================
   Search
   ========================================== */

#search-input {
    margin-top: 8px;
    margin-bottom: 15px;
}


/* ==========================================
   Buttons
   ========================================== */

button {
    padding: 10px 18px;

    border: none;
    border-radius: 5px;

    background-color: #2c3e50;
    color: white;

    font-size: 15px;
    cursor: pointer;

    transition: background-color 0.2s ease, transform 0.2s ease;
}

button:hover {
    background-color: #1a252f;
    transform: translateY(-1px);
}


/* ==========================================
   Error Message
   ========================================== */

#error-message {
    color: #d32f2f;
    font-weight: bold;
    min-height: 24px;
}


/* ==========================================
   Notes List
   ========================================== */

#notes-list {
    list-style: none;
    padding: 0;
    margin: 0;
}


/* ==========================================
   Note Cards
   ========================================== */

.note-card {
    padding: 18px;
    margin-bottom: 15px;

    border: 1px solid #ddd;
    border-radius: 8px;

    background-color: #fafafa;
}


/* ==========================================
   Note Text
   ========================================== */

.note-text {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.05rem;
    font-weight: 500;
}


/* ==========================================
   Note Category
   ========================================== */

.note-category {
    display: inline-block;
    padding: 4px 9px;
    margin-bottom: 8px;

    border-radius: 4px;

    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}


/* ==========================================
   Category Styles
   ========================================== */

.category-personal {
    border-left: 5px solid #00897b;
}

.category-personal .note-category {
    background-color: #d9f3ef;
    color: #00695c;
}


.category-work {
    border-left: 5px solid #8b0000;
}

.category-work .note-category {
    background-color: #f5dddd;
    color: #8b0000;
}


.category-study {
    border-left: 5px solid #1976d2;
}

.category-study .note-category {
    background-color: #dcecff;
    color: #1565c0;
}


/* ==========================================
   Note Date
   ========================================== */

.note-date {
    margin: 0 0 12px;
    color: #666;
    font-size: 0.85rem;
}


/* ==========================================
   Delete Button
   ========================================== */

.delete-btn {
    background-color: #c62828;
}

.delete-btn:hover {
    background-color: #8e0000;
}


/* ==========================================
   Footer
   ========================================== */

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}

footer p {
    margin: 0;
}


/* ==========================================
   Mobile Design
   ========================================== */

@media (max-width: 600px) {

    main {
        margin: 20px auto;
        padding: 0 10px;
    }

    section {
        padding: 18px;
    }

    #note-form {
        flex-direction: column;
        align-items: stretch;
    }

    .form-group {
        width: 100%;
    }

    #note-form button {
        width: 100%;
    }

    header {
        padding: 25px 15px;
    }

    header h1 {
        font-size: 1.8rem;
    }
}
`;

console.log('Quick Notes app loaded.');