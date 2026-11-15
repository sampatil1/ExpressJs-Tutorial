import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Welcome to home page.</h1>");
});

app.get("/login", (req, res) => {
	res.send(`
        <form action='/submit' method="POST">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        </form>
        `);
});

app.post("/submit", (req, res) => {
	res.send("<h1>Submit Page</h1>");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
