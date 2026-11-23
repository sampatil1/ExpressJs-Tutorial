import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Home page!");
});

app.get("/fail", (req, res, next) => {
	const err = new Error("Something went wrong!");
	err.statusCode = 500;
	next(err);
});

app.use((err, req, res, next) => {
	console.log("Errorcp cought by: ", err.message);
	res.status(err.statusCode || 500).json({
		suceess: false,
		message: err.message || "Internal Server Error",
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
