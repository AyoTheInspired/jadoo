import { useState } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const ToggleIcon = () => {
	const [pwdShown, setPwdShown] = useState(false);
	const togglePwdShown = () => setPwdShown(!pwdShown);

	const ToggleButton = () =>
		pwdShown ? (
			<BsFillEyeSlashFill
				onClick={() => togglePwdShown()}
				className="text-lg curp absolute top-8 right-3"
			/>
		) : (
			<BsEyeFill
				onClick={() => togglePwdShown()}
				className="text-lg curp absolute top-8 right-3"
			/>
		);

	return {
		pwdShown,
		ToggleButton,
	};
};

export default ToggleIcon;
