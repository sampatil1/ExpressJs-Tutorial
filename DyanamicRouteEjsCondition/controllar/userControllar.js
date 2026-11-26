import { getUserData } from "../models/userModal.js";

export const getUserPage = (req, res) => {
	const { id } = req.params;
	const users = getUserData();
	console.log("usersssss", users);
	const user = users.find((u) => u.id === parseInt(id));
	if (user) {
		res.render("user", { user: user });
	} else {
		res.status(404).send("User not found.");
	}
};
