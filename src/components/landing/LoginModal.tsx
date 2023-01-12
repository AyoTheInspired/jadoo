import React, { ChangeEvent } from "react";
import { CenterModal, useToolkit } from "../../components";
import { toggleLoginModal } from "../../redux/slices/authSlice";

type ErrorProps = {
	email: string | null;
	password: string | null;
};

const LoginModal = () => {
	const { useAppSelector, dispatch, useEffect, useState } = useToolkit();
	const { isLoginModalOpen } = useAppSelector((state) => state.auth);

	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState<ErrorProps>({
		email: null,
		password: null,
	});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);

		console.log("formValues :>> ", formValues);
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

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
		} else if (values.password.length !== 4) {
			errors.password = "Password must be 4 characters";
		}
		return errors;
	};

	return (
		<CenterModal
			darkBg
			title="Login"
			control={isLoginModalOpen}
			onClose={() => dispatch(toggleLoginModal())}>
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
						<button className="outline-none bg-orange-400 font-pop med px-4 py-2 rounded-md text-white active:scale-90 transition-transform">
							Login
						</button>{" "}
					</div>
				</form>
			</div>
		</CenterModal>
	);
};

export default LoginModal;