import { useForm } from "react-hook-form";
import {
	FormData,
	FormDataPart2,
	formPart2Schema,
} from "~schema/RegistrationForm";
import {
	useAppDispatch,
	useAppSelector,
	incrementFormStep,
	decrementFormStep,
	selectFormData,
	updateForm,
} from "~store";

import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormPart2.module.scss";
import {
	Advantages,
	RadioGroup,
	CheckBoxGroup,
	Button,
} from "~components/FormElements";

export function FormPart2() {
	const savedValues = useAppSelector(selectFormData);
	const { register, getValues, handleSubmit, control } = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart2Schema),
		defaultValues: savedValues,
	});

	const dispatch = useAppDispatch();

	const handleBackStep = () => {
		dispatch(updateForm(getValues()));
		dispatch(decrementFormStep());
	};
	const handleNextStep = (data: FormDataPart2) => {
		dispatch(updateForm(data));
		dispatch(incrementFormStep());
	};

	return (
		<form
			onSubmit={(...args) => void handleSubmit(handleNextStep)(...args)}
			className={styles.form2}
		>
			<Advantages
				control={control}
				register={register}
				className={styles.form2__advantages}
			/>

			<CheckBoxGroup
				register={register}
				values={["1", "2", "3"]}
				className={styles.form2__checkbox}
			/>

			<RadioGroup
				values={["1", "2", "3"]}
				register={register}
				className={styles.form2__radio}
			/>

			<Button
				className={styles.form2__button_back}
				type="button"
				onClick={handleBackStep}
				id="button-back"
				style="border"
			>
				Back
			</Button>
			<Button
				className={styles.form2__button_next}
				type="submit"
				id="button-next"
			>
				Next
			</Button>
		</form>
	);
}

export default FormPart2;
