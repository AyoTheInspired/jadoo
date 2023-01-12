import { ChangeEvent } from "react";
import { CenterModal, useToggle, useAuth, useToolkit } from "../../components";
import { flipAuthModals, toggleLoginModal } from "../../redux/slices/authSlice";

type ErrorProps = {
	email: string | null;
	password: string | null;
};

const LoginModal = () => {
	const { ToggleButton, pwdShown } = useToggle();
	const { useAppSelector, dispatch, useState } = useToolkit();
	const { isLoginModalOpen } = useAppSelector((state) => state.auth);
	const { loginUser, authLoading } = useAuth();

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

		if (email?.length && password?.length) loginUser(email, password);
	};

	const validate = (values: ErrorProps) => {
		const errors: ErrorProps = {
			email: null,
			password: null,
		};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.password) {
			errors.password = "Password is required";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "Invalid Email!";
		}
		return errors;
	};

	return (
		<CenterModal
			darkBg
			title="Login to your account"
			control={isLoginModalOpen}
			onClose={() => dispatch(toggleLoginModal())}>
			<div className="w-full font-pop">
				<form onSubmit={handleSubmit}>
					<div className="space-y-7">
						<div className="field">
							<label>Email</label>
							<input
								required
								type="text"
								name="email"
								placeholder="Email"
								className="form-input"
								value={formValues.email}
								onChange={handleChange}
							/>
							<p className="error-txt">{formErrors?.email}</p>
						</div>
						<div className="field relative">
							<label>Password</label>
							<input
								required
								type={pwdShown ? "text" : "password"}
								name="password"
								placeholder="Password"
								className="form-input"
								value={formValues.password}
								onChange={handleChange}
							/>{" "}
							<ToggleButton />
							<p className="error-txt">{formErrors.password}</p>
						</div>
						{authLoading ? (
							<p className="mb-0 mt-3">Loading...</p>
						) : (
							<button className="disabled:cursor-not-allowed outline-none bg-orange-400 font-pop med px-4 py-2 rounded-md text-white active:scale-90 transition-transform">
								Login
							</button>
						)}

						<p className="my-3 lt-txt text-lg font-pop">
							Don't have an account? &nbsp;
							<span
								onClick={() => dispatch(flipAuthModals())}
								className="underline curp smb text-black">
								Register
							</span>
						</p>
					</div>
				</form>
			</div>
		</CenterModal>
	);
};

export default LoginModal;
