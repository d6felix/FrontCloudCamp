import { useForm } from "react-hook-form";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrementFormStep } from "@features/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";

export function FormPart3() {
	const {
		register,
		setValue,
		getValues,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);

	useEffect(() => {
		const { about } = { ...savedValues };
		setValue("about", about);
	}, [savedValues]);

	const backStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(decrementFormStep());
	};
	const onSubmitHandle = () => {
		dispatch(updateForm(getValues()));
	};

	return (
		<div>
			<label>About:</label>
			<textarea {...register("about")} id="field-about"></textarea>
			<button type="button" onClick={backStepHandle} id="button-back">
				Back
			</button>
			<button type="submit" onClick={onSubmitHandle} id="button-send">
				Submit
			</button>
		</div>
	);
}

export default FormPart3;
