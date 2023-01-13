import {
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
	db,
	signOut,
} from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
	flipAuthModals,
	setUser,
	toggleLoginModal,
	logoutUser,
} from "../../redux/slices/authSlice";
import useToolkit from "./useToolkit";

const useAuth = () => {
	const { dispatch, useState } = useToolkit();
	const [authLoading, setAuthLoading] = useState(false);

	const registerUser = async (email: string, password: string) => {
		console.log("reg running");
		setAuthLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await addDoc(collection(db, "users"), {
				uid: Math.random(),
				authProvider: "local",
				email,
			});

			alert("Registration successful");
			setAuthLoading(false);
			dispatch(flipAuthModals());
		} catch (err) {
			setAuthLoading(false);
			alert(err);
		}
	};

	const loginUser = async (email: string, password: string) => {
		setAuthLoading(true);

		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			const userEmail = res?.user?.email || "";
			alert("Login successful");
			dispatch(toggleLoginModal());
			dispatch(setUser(userEmail));
			setAuthLoading(false);
		} catch (err) {
			setAuthLoading(false);
			alert(err);
		}
	};

	const logout = async (email: string, password: string) => {
		try {
			dispatch(logoutUser());
			signOut(auth);
		} catch (err) {
			alert(err);
		}
	};

	return { registerUser, loginUser, authLoading, logout };
};

export default useAuth;
