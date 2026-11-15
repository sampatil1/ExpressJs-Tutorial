export default function login() {
	return `<form action='/submit' method="POST">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        </form> <a href="/">Home Page</a>`;
}
