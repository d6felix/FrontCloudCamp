import { configureStore } from "@reduxjs/toolkit";
import formStepReducer from "@features/formStep/formStepSlice";
import formDataReducer, { formApi } from "@features/formSubmit/formSubmitSlice";

export const store = configureStore({
	reducer: {
		formStep: formStepReducer,
		formData: formDataReducer,
		[formApi.reducerPath]: formApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
