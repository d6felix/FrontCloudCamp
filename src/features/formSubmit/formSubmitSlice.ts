import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { FormData } from "@components/CustomForm";

export type FormSubmitState = FormData;

const initialState: FormSubmitState = {
	nickname: "",
	name: "",
	sername: "",
	sex: "man",
	advantages: [],
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
			console.log("redux: ", state, action.payload);
			return newState;
		},
	},
});

export const { updateFormSubmit } = formSubmitSlice.actions;

export const selectFormSubmit = (state: RootState) => state.formSubmit;

export default formSubmitSlice.reducer;
