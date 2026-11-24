import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

//Static route
// app.get("/", (req, res) => {
// 	res.render("index", {
// 		title: "Home Page",
// 		message: "Welcome to the home page.",
// 	});
// });

// Dynamic route

app.get("/user/:username", (req, res) => {
	const username = req.params.username;
	res.render("index", {
		title: "User Page",
		message: `Welcome ${username}.`,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
