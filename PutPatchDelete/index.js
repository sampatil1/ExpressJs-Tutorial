import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
	{ id: 1, name: "Samadhan", age: 36 },
	{ id: 2, name: "Ashok", age: 34 },
	{ id: 3, name: "Raju", age: 50 },
];

app.get("/users", (req, res) => {
	res.json(users);
});

app.post("/users", (req, res) => {
	const newUser = { id: Date.now(), ...req.body };
	users.push(newUser);
	res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const index = users.findIndex((user) => user.id === userId);

	if (index === -1) {
		return res.status(404).json({ message: "User not found." });
	}

	users[index] = { id: userId, ...req.body };
	res.json(users[index]);
});

app.patch("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const index = users.findIndex((user) => user.id === userId);

	if (index === -1) {
		return res.status(404).json({ message: "User not found." });
	}

	users[index] = { ...users[index], ...req.body };
	res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const index = users.findIndex((user) => user.id === userId);

	if (index === -1) {
		return res.status(404).json({ message: "User not found." });
	}

	users.splice(index, 1);
	res.json({ message: "User deleted successfully!" });
});

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
