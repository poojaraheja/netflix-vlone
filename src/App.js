import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Test from "./pages/Test";

function App() {
	return (
		<>
			<AuthContextProvider>
				{/* <Navbar /> */}
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signup"
						element={<Signup />}
					/>
					<Route
						path="/account"
						element={<Account />}
					/>
					<Route
						path="/test"
						element={<Test />}
					/>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
