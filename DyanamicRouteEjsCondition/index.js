import express from "express";
import userRoutes from "./router/userRoutes.js";
const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.use("/user", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
