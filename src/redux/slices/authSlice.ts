import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
	user: null | any;
	text: string;
}

const initialState: userState = {
	user: null,
	text: "global",
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
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
