import express from "express";

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
	console.log(`${new Date().toLocaleDateString()} ${req.method} ${req.url}`);
	next();
});

app.use("/admin", (req, res, next) => {
	console.log("This is only admin access!");
	next();
});

app.get("/", (req, res) => {
	res.send("Home Page.");
});

app.get("/about", (req, res) => {
	res.send("About page.");
});

app.get("/admin/dashboard", (req, res) => {
	res.send("Admin page.");
});

app.listen(PORT, () => {
	console.log("Server is running on " + PORT);
});
