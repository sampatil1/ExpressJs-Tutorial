import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/posts", async (req, res) => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await response.json();
		res.render("posts", { posts });
	} catch (error) {
		res.status(500).send("Error fetching posts.");
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
