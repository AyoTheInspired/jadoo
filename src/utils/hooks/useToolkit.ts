import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
	logoutUser,
	toggleLoginModal,
	toggleRegModal,
} from "../../redux/slices/authSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { NavItemProps } from "../../../types";

const useToolkit = () => {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

	const useAppDispatch: () => AppDispatch = useDispatch;
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const navLinks: NavItemProps[] = [
		{ title: "Destinations" },
		{ title: "Hotels" },
		{ title: "Flights" },
		{ title: "Bookings" },
		{
			title: user ? "Logout" : "Login",
			onClick: () =>
				user ? dispatch(logoutUser()) : dispatch(toggleLoginModal()),
		},
		{
			title: "Sign up",
			className: "border border-black rounded-md px-5 py-1.5",
			onClick: () => dispatch(toggleRegModal()),
		},
	];

	return {
		dispatch,
		useAppSelector,
		useState,
		useEffect,
		navLinks,
		user,
	};
};

export default useToolkit;
