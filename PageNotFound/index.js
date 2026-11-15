import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

const filePath = path.resolve();

console.log(filePath);

app.get("/", (req, res) => {
	res.sendFile(filePath + "/home.html");
});

app.get("/about", (req, res) => {
	res.send("<h1>Welcome to about page.</h1><p>This is about page.</p>");
});

app.use((req, res) => {
	res.status(404).sendFile(filePath + "/404.html");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
