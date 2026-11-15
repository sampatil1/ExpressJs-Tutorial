import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello Home page from Express.");
});

app.get("/about", (req, res) => {
	res.send("Hello About page from Express.");
});

app.post("/users", (req, res) => {
	const { name, age } = req.body;
	res.send(`User ${name} of age ${age} created successfully!`);
});

app.get("/search", (req, res) => {
	const { item } = req.query;
	res.send(`You searched for:${item}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
