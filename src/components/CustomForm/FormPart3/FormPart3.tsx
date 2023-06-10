import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrement } from "@features/formStep/formStepSlice";
import {
	selectFormSubmit,
	updateFormSubmit,
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
	const savedValues = useAppSelector(selectFormSubmit);

	useEffect(() => {
		const { about } = { ...savedValues };
		setValue("about", about);
	}, []);

	const backStepHandle = () => {
		dispatch(updateFormSubmit(getValues()));
		dispatch(decrement());
	};
	const onSubmitHandle = () => {
		dispatch(updateFormSubmit(getValues()));
	};

	return (
		<div>
			<label>About:</label>
			<textarea {...register("about")}></textarea>
			<button type="button" onClick={backStepHandle}>
				Back
			</button>
			<button type="submit" onClick={onSubmitHandle}>
				Submit
			</button>
		</div>
	);
}

export default FormPart3;
