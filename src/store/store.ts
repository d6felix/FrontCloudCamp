import { configureStore } from "@reduxjs/toolkit";
import formStepReducer from "@features/formStep/formStepSlice";
import formSubmitReducer from "@features/formSubmit/formSubmitSlice";

export const store = configureStore({
	reducer: {
		formStep: formStepReducer,
		formSubmit: formSubmitReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
