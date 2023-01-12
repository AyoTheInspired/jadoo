import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
	user: null | string;
	isLoginModalOpen: boolean;
	isRegModalOpen: boolean;
	isMobileMenuOpen: boolean;
}

const initialState: userState = {
	user: null,
	isLoginModalOpen: false,
	isRegModalOpen: false,
	isMobileMenuOpen: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<string>) => {
			return {
				...state,
				isLoginModalOpen: false,
				user: payload,
			};
		},

		logoutUser: (state) => {
			return {
				...state,
				user: null,
			};
		},

		toggleLoginModal: (state) => {
			return {
				...state,
				isLoginModalOpen: !state.isLoginModalOpen,
			};
		},

		toggleRegModal: (state) => {
			return {
				...state,
				isRegModalOpen: !state.isRegModalOpen,
			};
		},

		toggleMobileMenu: (state) => {
			return {
				...state,
				isMobileMenuOpen: !state.isMobileMenuOpen,
			};
		},

		flipAuthModals: (state) => {
			return {
				...state,
				isLoginModalOpen: !state.isLoginModalOpen,
				isRegModalOpen: !state.isRegModalOpen,
			};
		},
	},
});

export const {
	setUser,
	logoutUser,
	toggleLoginModal,
	toggleRegModal,
	flipAuthModals,
	toggleMobileMenu,
} = authSlice.actions;

export default authSlice.reducer;
