import { useForm, useWatch } from "react-hook-form";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrementFormStep } from "@features/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDataSchema } from "@schema/yupFormSchema";

export function FormPart3() {
	const {
		register,
		setValue,
		getValues,
		control,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onBlur",
		resolver: yupResolver(formDataSchema),
	});

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

	const watchAbout = useWatch({
		control,
		name: "about",
		defaultValue: "",
	}).replaceAll(" ", "");

	return (
		<div>
			<label htmlFor="field-about">
				About:
				<textarea {...register("about")} id="field-about"></textarea>
			</label>
			<div>Symbol count: {watchAbout.length}</div>
			<Button
				type="button"
				onClick={backStepHandle}
				id="button-back"
				style="border"
			>
				Back
			</Button>
			<Button type="submit" onClick={onSubmitHandle} id="button-send">
				Submit
			</Button>
		</div>
	);
}

export default FormPart3;
