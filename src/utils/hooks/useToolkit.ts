import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

const useToolkit = () => {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

	const useAppDispatch: () => AppDispatch = useDispatch;
	const dispatch = useAppDispatch();

	return { dispatch, useAppSelector, useState, useEffect };
};

export default useToolkit;
