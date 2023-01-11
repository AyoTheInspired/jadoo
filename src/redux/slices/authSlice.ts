import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
	user: null | any;
	isLoginModalOpen: boolean;
}

const initialState: userState = {
	user: null,
	isLoginModalOpen: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<number>) => {
			return {
				...state,
				user: payload,
			};
		},

		logoutUser: (state) => {
			return {
				...state,
				state: null,
			};
		},

		toggleLoginModal: (state) => {
			return {
				...state,
				isLoginModalOpen: !state.isLoginModalOpen,
			};
		},
	},
});

export const { setUser, logoutUser, toggleLoginModal } = authSlice.actions;

export default authSlice.reducer;
