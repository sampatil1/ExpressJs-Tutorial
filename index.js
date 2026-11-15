import express from "express";
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
	res.send("Hello World! ExpressJS!");
});

app.get("/about", (req, res) => {
	res.send("Hello About ExpressJS!");
});

app.get("/profile", (req, res) => {
	res.send("Hello Profile ExpressJS!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
