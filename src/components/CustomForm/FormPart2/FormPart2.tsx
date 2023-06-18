import { useForm } from "react-hook-form";
import {
	FormData,
	FormDataPart2,
	formPart2Schema,
} from "@schema/RegistrationForm";
import { useId } from "react-id-generator";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import {
	incrementFormStep,
	decrementFormStep,
} from "@features/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useMemo } from "react";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormPart2.module.scss";
import { CheckBox } from "@components/FormElements/CheckBox";
import { Advantages } from "@components/FormElements/Advantages";

export function FormPart2() {
	const savedValues = useAppSelector(selectFormData);
	const { register, getValues, handleSubmit, control } = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart2Schema),
		defaultValues: savedValues,
	});

	const dispatch = useAppDispatch();

	const checkboxId: React.Key[] = useId(3, "checkbox");
	const checkbox = useMemo(() => {
		return Array.from({ length: 3 }).map((_, index) => {
			const num = index + 1;
			return (
				<li key={checkboxId[index]}>
					<CheckBox
						id={`field-checkbox-group-option-${num}`}
						register={register}
						value={num}
						label={"checkbox"}
					/>
				</li>
			);
		});
	}, [checkboxId]);

	const radioId: React.Key[] = useId(3, "radio");
	const radio = useMemo(() => {
		return Array.from({ length: 3 }).map((_, index) => {
			const num = index + 1;
			return (
				<li key={radioId[index]}>
					<label htmlFor={`field-radio-group-option-${num}`}>
						<input
							type="radio"
							id={`field-radio-group-option-${num}`}
							value={num}
							className={styles.form2__radioItem}
							{...register("radio")}
						/>
						{num}
					</label>
				</li>
			);
		});
	}, [radioId]);

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
			<fieldset className={styles.form2__checkbox}>
				<legend>Checkbox group:</legend>
				<ul>{checkbox}</ul>
			</fieldset>

			<fieldset className={styles.form2__radio}>
				<legend>Radio group:</legend>
				<ul>{radio}</ul>
			</fieldset>
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
