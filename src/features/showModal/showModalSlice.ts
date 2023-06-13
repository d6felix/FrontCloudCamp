import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface ShowModalState {
	show: boolean;
	isSuccessfull: boolean;
}

const initialState: ShowModalState = {
	show: false,
	isSuccessfull: false,
};

export const showModalSlice = createSlice({
	name: "showModal",
	initialState,
	reducers: {
		showSuccess: () => {
			return { show: true, isSuccessfull: true };
		},
		showError: () => {
			return { show: true, isSuccessfull: false };
		},
		hide: () => {
			return { show: false, isSuccessfull: false };
		},
	},
});

export const { showSuccess, showError, hide } = showModalSlice.actions;

export const selectShowModal = (state: RootState) => state.showModal;

export default showModalSlice.reducer;
