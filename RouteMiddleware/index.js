import express from "express";

import userRouter from "./Routes/users.js";

const app = express();
const PORT = 3001;

// const customeMiddlewareQuery = (req, res, next) => {
// 	console.log("Query: ", req.query.age);
// 	if (!req.query.age || req.query.age < 18) {
// 		res.send("<h1>You are not allowed.</h1>");
// 	} else {
// 		next();
// 	}
// };

// const customeMiddlewareURL = (req, res, next) => {
// 	console.log("URL: ", req.url);
// 	next();
// };

app.use((req, res, next) => {
	console.log("Time: ", Date.now());
	console.log("Requested URL: ", req.url);
	next();
});

app.use("/users", userRouter);

app.get("/", (req, res) => {
	res.send("Welcome to Home page.");
});

// app.get("/login", customeMiddlewareQuery, customeMiddlewareURL, (req, res) => {
// 	res.send("Welcome to Login page.");
// });

// app.get("/users", customeMiddlewareQuery, (req, res) => {
// 	res.send("Welcome to Users page.");
// });

// app.get("/products", customeMiddlewareURL, (req, res) => {
// 	res.send("Welcome to Products page.");
// });

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
