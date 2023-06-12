import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import type { FormData } from "@schema/dataTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "./formSubmitAPI";
import { ServerResponse } from "./responseType";

export type FormDataState = FormData;

const initialState: FormDataState = {
	phoneNumber: "",
	email: "",
	nickname: "",
	name: "",
	sername: "",
	sex: "man",
	advantages: ["", "", ""],
	checkbox: [],
	radio: 0,
	about: "",
};

export const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
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

export const { updateForm, removeFormAdvantage, addFormAdvantage } =
	formDataSlice.actions;

export const selectFormData = (state: RootState) => state.formData;

export const formApi = createApi({
	reducerPath: "formApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		addFormData: builder.mutation<ServerResponse, FormData>({
			query: (body) => ({
				url: "/",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useAddFormDataMutation } = formApi;
export default formDataSlice.reducer;
