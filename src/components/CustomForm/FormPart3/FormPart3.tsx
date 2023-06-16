import { useForm, useWatch } from "react-hook-form";
import { FormData, formPart3Schema } from "@schema/RegistrationForm";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { decrementFormStep } from "@features/formStep/formStepSlice";
import {
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorTip } from "@components/ErrorTip";

export function FormPart3() {
	const {
		register,
		setValue,
		setFocus,
		getValues,
		control,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart3Schema),
	});

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);

	useEffect(() => {
		const { about } = { ...savedValues };
		setFocus("about");
		setValue("about", about);
	}, [savedValues, setFocus]);

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
				<ErrorTip>{errors.about?.message}</ErrorTip>
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
