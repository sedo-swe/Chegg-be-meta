
const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

function noteExists (req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  }
  next({
    status: 404,
    message: `Note id not found: ${req.params.noteId}`,
  });
}

function read(req, res) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
}

function list(req, res) {
  res.json({ data: notes });
}

function hasText (req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  next({ status: 400, message: "A 'text' property is required." });
}

function create(req, res, next) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

function update(req, res) {
    const { noteId } = req.params;
    const foundNote = notes.find((note) => note.id === Number(noteId));
    const { data: { text } = {} } = req.body;
  
    // Update the note
    foundNote.text = text;
  
    res.json({ data: foundNote });
}

function remove(req, res) {
    const { noteId } = req.params;
    const index = notes.findIndex((note) => note.id === Number(noteId));
    // `splice()` returns an array of the deleted elements, even if it is one element
    const deletedNotes = notes.splice(index, 1);
    res.sendStatus(204);
}

module.exports = {
  create: [hasText, create],
  delete: [noteExists, remove],
  list,
  read: [noteExists, read],
  update: [noteExists, hasText, update],

};