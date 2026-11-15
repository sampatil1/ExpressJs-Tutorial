const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
	res.send("Hello World! Express tutorial");
});

app.get("/about", (req, res) => {
	res.send("About page.");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
