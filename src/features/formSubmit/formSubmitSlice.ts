import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { FormData } from "@components/CustomForm";

export type FormSubmitState = FormData;

const initialState: FormSubmitState = {
	nickname: "",
	name: "",
	sername: "",
	sex: "man",
	advantages: ["", "", ""],
	checkbox: [],
	radio: 0,
	about: "",
};

export const formSubmitSlice = createSlice({
	name: "formSubmit",
	initialState,
	reducers: {
		updateFormSubmit: (state, action: PayloadAction<Partial<FormData>>) => {
			const newState = Object.assign({}, state, action.payload);
			return newState;
		},
		removeFormAdvantage: (
			state,
			action: PayloadAction<{ toRemove: number; advantages: string[] }>
		) => {
			const newState = Object.assign({}, state, {
				advantages: [...action.payload.advantages].filter(
					(_, index) => index !== action.payload.toRemove
				),
			});
			return newState;
		},
		addFormAdvantage: (
			state,
			action: PayloadAction<{ advantages: string[] }>
		) => {
			const newState = Object.assign({}, state, {
				advantages: [...action.payload.advantages, ""],
			});
			return newState;
		},
	},
});

export const { updateFormSubmit, removeFormAdvantage, addFormAdvantage } =
	formSubmitSlice.actions;

export const selectFormSubmit = (state: RootState) => state.formSubmit;

export default formSubmitSlice.reducer;
