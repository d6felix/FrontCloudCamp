import { useForm } from "react-hook-form";
import {
	FormData,
	FormDataPart3,
	formDataSchema,
	formPart3Schema,
} from "~schema/RegistrationForm";
import { useAppDispatch, useAppSelector } from "~store/reduxHooks";
import { decrementFormStep } from "~store/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
	useAddFormDataMutation,
} from "~store/formSubmit/formSubmitSlice";
import { About, Button } from "~components/FormElements";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormPart3.module.scss";
import { createPortal } from "react-dom";
import { Modal } from "~components/Modal";
import {
	showModalLoading,
	showModalError,
	showModalSuccess,
} from "~store/showModal/showModalSlice";
import { ServerResponse } from "~store/formSubmit/responseType";

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

	const backStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(decrementFormStep());
	};

	const onFetch = async (formSubmit: Partial<FormData>) => {
		dispatch(showModalLoading());

		await formDataSchema
			.isValid(formSubmit)
			.then(() => {
				addFormData(formSubmit as FormData)
					.unwrap()
					.then((payload: ServerResponse) =>
						payload.status === "success"
							? dispatch(showModalSuccess())
							: dispatch(showModalError())
					)
					.catch(() => dispatch(showModalError()));
			})
			.catch(() => dispatch(showModalError()));
	};

	const onSubmit = (data: FormDataPart3) => {
		const storeData = dispatch(updateForm(data)).payload;
		return onFetch(storeData);
	};

	return (
		<>
			<form
				onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
				className={styles.form3}
			>
				<About
					register={register}
					control={control}
					className={styles.form3__about}
					errors={errors.about?.message}
				/>
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
