import { useForm, useWatch } from "react-hook-form";
import {
	FormData,
	FormDataPart3,
	formDataSchema,
	formPart3Schema,
} from "@schema/RegistrationForm";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrementFormStep } from "@features/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
	useAddFormDataMutation,
} from "@features/formSubmit/formSubmitSlice";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorTip } from "@components/ErrorTip";
import styles from "./FormPart3.module.scss";
import { createPortal } from "react-dom";
import { Modal } from "@components/Modal";
import {
	showModalError,
	showModalSuccess,
} from "@features/showModal/showModalSlice";
import { ServerResponse } from "@features/formSubmit/responseType";
import { useCallback } from "react";

export function FormPart3() {
	const savedValues = useAppSelector(selectFormData);
	const {
		register,
		getValues,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart3Schema),
		defaultValues: savedValues,
	});

	const dispatch = useAppDispatch();

	const [addFormData] = useAddFormDataMutation();
	const formSubmit = useAppSelector(selectFormData);

	const watchAbout = useWatch({
		control,
		name: "about",
		defaultValue: "",
	}).replaceAll(" ", "");

	const backStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(decrementFormStep());
	};

	const onFetch = useCallback(async () => {
		console.log(formSubmit);
		if (formDataSchema.isValidSync(formSubmit)) {
			await addFormData(formSubmit)
				.unwrap()
				.then((payload: ServerResponse) =>
					payload.status === "success"
						? dispatch(showModalSuccess())
						: dispatch(showModalError())
				)
				.catch(() => dispatch(showModalError()));
		} else {
			dispatch(showModalError());
		}
	}, [formSubmit]);

	const onSubmit = useCallback((data: FormDataPart3) => {
		dispatch(updateForm(data));
		return onFetch();
	}, []);

	return (
		<>
			<form
				onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
				className={styles.form3}
			>
				<label htmlFor="field-about" className={styles.form3__about}>
					<div className={styles.form3__about_container}>
						About:
						<textarea
							className={styles.form3__input}
							{...register("about")}
							id="field-about"
						></textarea>
					</div>
					<ErrorTip className={styles.form3__about_error}>
						{errors.about?.message}
					</ErrorTip>
					<div className={styles.form3__about_count}>
						Symbol count: {watchAbout.length}
					</div>
				</label>
				<Button
					type="button"
					onClick={backStepHandle}
					id="button-back"
					style="border"
					className={styles.form3__button_back}
				>
					Back
				</Button>
				<Button
					type="submit"
					id="button-send"
					className={styles.form3__button_submit}
				>
					Submit
				</Button>
			</form>
			{createPortal(<Modal />, document.body)}
		</>
	);
}

export default FormPart3;
