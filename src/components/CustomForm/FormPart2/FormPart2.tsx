import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { useId } from "react-id-generator";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { increment, decrement } from "@features/formStep/formStepSlice";
import {
	removeFormAdvantage,
	addFormAdvantage,
	selectFormSubmit,
	updateFormSubmit,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";

export function FormPart2() {
	const {
		register,
		setValue,
		getValues,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormSubmit);

	useEffect(() => {
		const { advantages, checkbox, radio } = { ...savedValues };
		setValue("advantages", advantages);
		setValue("checkbox", checkbox);
		setValue("radio", radio);
	}, [savedValues]);

	const backStepHandle = () => {
		dispatch(updateFormSubmit(getValues()));
		dispatch(decrement());
	};
	const nextStepHandle = () => {
		dispatch(updateFormSubmit(getValues()));
		dispatch(increment());
	};

	const addAdvantages = () => {
		dispatch(
			addFormAdvantage({
				advantages: getValues("advantages"),
			})
		);
	};

	const advantagesLength = useAppSelector(selectFormSubmit).advantages.length;
	const advantagesId: React.Key[] = useId(advantagesLength, "advantages");
	const advantages = Array.from({ length: advantagesLength }).map(
		(_, index) => {
			return (
				<div key={advantagesId[index]}>
					<input {...register(`advantages.${index}`)} />
					<button
						type="button"
						onClick={() => {
							dispatch(
								removeFormAdvantage({
									toRemove: index,
									advantages: getValues("advantages"),
								})
							);
						}}
					>
						delete
					</button>
				</div>
			);
		}
	);

	const checkboxId: React.Key[] = useId(3, "checkbox");
	const checkbox = Array.from({ length: 3 }).map((_, index) => {
		const num = index + 1;
		return (
			<li key={checkboxId[index]}>
				<label htmlFor={`checkbox_${num}`}>
					<input
						type="checkbox"
						id={`checkbox_${num}`}
						value={num}
						{...register(`checkbox`)}
					/>
					{num}
				</label>
			</li>
		);
	});

	const radioId: React.Key[] = useId(3, "radio");
	const radio = Array.from({ length: 3 }).map((_, index) => {
		const num = index + 1;
		return (
			<li key={radioId[index]}>
				<label htmlFor={`radio_${num}`}>
					<input
						type="radio"
						id={`radio_${num}`}
						value={num}
						{...register("radio")}
					/>
					{num}
				</label>
			</li>
		);
	});

	return (
		<div>
			<fieldset>
				<label>Advantages:{advantages}</label>
				<button type="button" onClick={addAdvantages}>
					+
				</button>
			</fieldset>
			<fieldset>
				<legend>Checkbox group:</legend>
				<ul>{checkbox}</ul>
			</fieldset>

			<fieldset>
				<legend>Radio group:</legend>
				<ul>{radio}</ul>
			</fieldset>
			<button type="button" onClick={backStepHandle}>
				Back
			</button>
			<button type="button" onClick={nextStepHandle}>
				Next
			</button>
			<button type="submit">Submit</button>
		</div>
	);
}

export default FormPart2;
