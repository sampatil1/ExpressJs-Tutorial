import express from "express";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3005;

app.use(morgan("dev"));

app.use(cors());

const limiter = rateLimit({
	windowMs: 15 * 60 * 100,
	max: 5,
	message: "Too many request from this IP, Please try again leter. ",
	standardHeaders: true,
	legacyHeaders: false,
});

app.use("/", limiter);

app.get("/", (req, res) => {
	res.send("Hello 3rd Party Middleware.");
});

app.get("/api/data", (req, res) => {
	res.json({ msg: "Sample API data" });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
