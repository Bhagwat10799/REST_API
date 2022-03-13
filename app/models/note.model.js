const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
	title: String,
	content: String,
});

module.exports = mongoose.model("Note", NoteSchema);
