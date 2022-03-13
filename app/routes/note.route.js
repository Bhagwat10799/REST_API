module.exports = (app) => {
	const notes = require("../controllers/note.controller.js");

	app.post("/notes", notes.create);

	app.get("/notes", notes.findAll);

	app.get("/notes/:noteID", notes.findOne);

	app.put("/notes/:noteId", notes.update);

	app.delete("/notes/:noteId", notes.delete);
};
