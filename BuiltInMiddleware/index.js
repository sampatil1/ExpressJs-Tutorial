import express from "express";

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../public"));

app.post("/api/user", (req, res) => {
	console.log("JSON body: ", req.body);
	res.json({ msg: "JSON Data received.", data: req.body });
});

app.post("/reqister", (req, res) => {
	console.log("Form body: ", req.body);
	res.send(`Thanks, ${req.body.username}! Your registration is complete.`);
});

app.get("/hello", (req, res) => {
	res.send("<h1>Welcome to the home.</h1>");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
