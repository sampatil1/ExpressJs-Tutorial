import express from "express";

const app = express();
const PORT = 3002;

app.use(express.json());
let notes = [];

app.get("/notes", (req, res) => {
	res.json({
		success: true,
		data: notes,
	});
});

app.post("/notes", (req, res) => {
	const { title, content } = req.body;
	const newNote = {
		id: notes.length + 1,
		title,
		content,
	};
	notes.push(newNote);
	res.status(200).json({
		success: true,
		message: "Note Added Successfully!",
		data: notes,
	});
});

// show note on id

app.get("/notes/:id", (req, res) => {
	const note = notes.find((n) => n.id === parseInt(req.params.id));
	if (!note) {
		return res.status(404).json({
			success: true,
			message: "Note not found.",
		});
	}
	res.json({
		success: false,
		data: note,
	});
});

//Update note by id

app.put("/notes/:id", (req, res) => {
	const note = notes.find((n) => n.id === parseInt(req.params.id));
	if (!note) {
		return res.status(404).json({
			success: true,
			message: "Note not found.",
		});
	}
	const { title, content } = req.body;
	note.title = title || note.title;
	note.content = content || note.content;

	res.json({
		success: true,
		message: "Note updated successfully!",
		data: note,
	});
});

//Delete
app.delete("/notes/:id", (req, res) => {
	const noteIndex = notes.find((n) => n.id === parseInt(req.params.id));
	if (noteIndex === -1) {
		return res.status(404).json({
			success: true,
			message: "Note not found.",
		});
	}
	const deleted = notes.splice(noteIndex, 1);
	res.json({
		success: true,
		message: "Note deleted successfully!",
		data: deleted,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
