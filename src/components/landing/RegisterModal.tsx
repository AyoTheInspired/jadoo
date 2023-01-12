import { ChangeEvent } from "react";
import { CenterModal, useAuth, useToolkit } from "..";
import { flipAuthModals, toggleRegModal } from "../../redux/slices/authSlice";

type ErrorProps = {
	email: string | null;
	password: string | null;
};

const RegModal = () => {
	const { useAppSelector, dispatch, useState } = useToolkit();
	const { isRegModalOpen } = useAppSelector((state) => state.auth);
	const { registerUser, authLoading } = useAuth();

	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState<ErrorProps>({
		email: null,
		password: null,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		const { email, password } = formValues;
		e.preventDefault();
		setFormErrors(validate(formValues));

		if (formErrors.email === null && formErrors.password === null)
			console.log("formErrors :>> ", formErrors);
		registerUser(email, password);
	};

	const validate = (values: ErrorProps) => {
		const errors: ErrorProps = {
			email: null,
			password: null,
		};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length !== 6) {
			errors.password = "Password must be 6 characters";
		}
		return errors;
	};

	return (
		<CenterModal
			darkBg
			title="Create acccount"
			control={isRegModalOpen}
			onClose={() => dispatch(toggleRegModal())}>
			<div className="w-full font-pop">
				<form onSubmit={handleSubmit}>
					<div className="space-y-7">
						<div className="field">
							<label>Email</label>
							<input
								type="text"
								name="email"
								placeholder="Email"
								className="form-input"
								value={formValues.email}
								onChange={handleChange}
							/>
							<p className="error-txt">{formErrors?.email}</p>
						</div>
						<div className="field">
							<label>Password</label>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="form-input"
								value={formValues.password}
								onChange={handleChange}
							/>
							<p className="error-txt">{formErrors.password}</p>
						</div>
						{authLoading ? (
							<p className="mb-0 mt-3">Loading...</p>
						) : (
							<button className="disabled:cursor-not-allowed outline-none bg-orange-400 font-pop med px-4 py-2 rounded-md text-white active:scale-90 transition-transform">
								Register
							</button>
						)}

						<p className="my-3 lt-txt text-lg font-pop">
							Already have an account? &nbsp;
							<span
								onClick={() => dispatch(flipAuthModals())}
								className="underline smb text-black">
								Login
							</span>
						</p>
					</div>
				</form>
			</div>
		</CenterModal>
	);
};

export default RegModal;
