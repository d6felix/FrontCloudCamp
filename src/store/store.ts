import { configureStore } from "@reduxjs/toolkit";
import formStepReducer from "./formStep/formStepSlice";
import showModalReducer from "./showModal/showModalSlice";
import formDataReducer, { formApi } from "./formSubmit/formSubmitSlice";

export const store = configureStore({
	reducer: {
		formStep: formStepReducer,
		formData: formDataReducer,
		[formApi.reducerPath]: formApi.reducer,
		showModal: showModalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
