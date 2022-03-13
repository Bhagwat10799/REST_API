const express = require("express");
const bodyParser = require('body-parser');
const dbConfig = require("./config/dbConnect");
const mongoose = require("mongoose");
const app = express();

mongoose.Promise = global.Promise;

mongoose
	.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Successfully Connected to DB");
	})
	.catch((err) => {
		console.log(err);
		process.exit();
	});
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Welcome o my Easy Notes App!!" });
});

require("./app/routes/note.route")(app);
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
