import { useForm } from "react-hook-form";
import type { FormData } from "@schema/dataTypes";
import { useId } from "react-id-generator";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import {
	incrementFormStep,
	decrementFormStep,
} from "@features/formStep/formStepSlice";
import {
	removeFormAdvantage,
	addFormAdvantage,
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect, useMemo } from "react";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDataSchema } from "@schema/yupFormSchema";
import RemoveIcon from "@assets/RemoveIcon.svg";
import styles from "./FormPart2.module.scss";
import classNames from "classnames";

export function FormPart2() {
	const {
		register,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onBlur",
		resolver: yupResolver(formDataSchema),
	});

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);

	useEffect(() => {
		const { advantages, checkbox, radio } = { ...savedValues };
		setValue("advantages", advantages);
		setValue("checkbox", checkbox);
		setValue("radio", radio);
	}, [savedValues]);

	const backStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(decrementFormStep());
	};
	const nextStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(incrementFormStep());
	};

	const addAdvantages = () => {
		dispatch(addFormAdvantage(getValues()));
	};

	const advantagesLength = useAppSelector(selectFormData).advantages.length;
	const advantagesId: React.Key[] = useId(advantagesLength, "advantages");
	const advantages = useMemo(() => {
		return Array.from({ length: advantagesLength }).map((_, index) => {
			return (
				<div key={advantagesId[index]} id="field-advantages">
					<input
						className={classNames(styles.form2__input)}
						{...register(`advantages.${index}`)}
						id={`field-advantages-${index + 1}`}
					/>
					<div
						onClick={() => {
							dispatch(
								removeFormAdvantage({
									toRemove: index,
									advantages: getValues("advantages"),
								})
							);
						}}
						id={`button-remove-${index + 1}`}
					>
						<img src={RemoveIcon} alt="remove" />
					</div>
				</div>
			);
		});
	}, [advantagesLength, advantagesId]);

	const checkboxId: React.Key[] = useId(3, "checkbox");
	const checkbox = useMemo(() => {
		return Array.from({ length: 3 }).map((_, index) => {
			const num = index + 1;
			return (
				<li key={checkboxId[index]}>
					<label htmlFor={`field-checkbox-group-option-${num}`}>
						<input
							type="checkbox"
							id={`field-checkbox-group-option-${num}`}
							value={num}
							{...register(`checkbox`)}
						/>
						{num}
					</label>
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
							{...register("radio")}
						/>
						{num}
					</label>
				</li>
			);
		});
	}, [radioId]);

	return (
		<div className={classNames(styles.form2)}>
			<fieldset>
				<label htmlFor="field-advantages">Advantages:{advantages}</label>
				<Button
					type="button"
					onClick={addAdvantages}
					id="button-add"
					style="border"
				>
					+
				</Button>
			</fieldset>
			<fieldset>
				<legend>Checkbox group:</legend>
				<ul>{checkbox}</ul>
			</fieldset>

			<fieldset>
				<legend>Radio group:</legend>
				<ul>{radio}</ul>
			</fieldset>
			<Button
				className={classNames(styles.form2__button_back)}
				type="button"
				onClick={backStepHandle}
				id="button-back"
				style="border"
			>
				Back
			</Button>
			<Button
				className={classNames(styles.form2__button_next)}
				type="button"
				onClick={nextStepHandle}
				id="button-next"
			>
				Next
			</Button>
		</div>
	);
}

export default FormPart2;
