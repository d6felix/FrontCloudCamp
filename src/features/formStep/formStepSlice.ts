import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface FormStepState {
	value: number;
}

const initialState: FormStepState = {
	value: 1,
};

export const formStepSlice = createSlice({
	name: "formStep",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = formStepSlice.actions;

export const selectFormStep = (state: RootState) => state.formStep.value;

export default formStepSlice.reducer;
