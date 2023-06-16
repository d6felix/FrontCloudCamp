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
import classNames from "classnames";
import styles from "./FormPart3.module.scss";

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

	const watchAbout = useWatch({
		control,
		name: "about",
		defaultValue: "",
	}).replaceAll(" ", "");

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

	return (
		<div className={classNames(styles.form3)}>
			<label htmlFor="field-about" className={classNames(styles.form3__about)}>
				<div className={classNames(styles.form3__about_container)}>
					About:
					<textarea
						className={classNames(styles.form3__input)}
						{...register("about")}
						id="field-about"
					></textarea>
				</div>
				<ErrorTip className={classNames(styles.form3__about_error)}>
					{errors.about?.message}
				</ErrorTip>
				<div className={classNames(styles.form3__about_count)}>
					Symbol count: {watchAbout.length}
				</div>
			</label>
			<Button
				type="button"
				onClick={backStepHandle}
				id="button-back"
				style="border"
				className={classNames(styles.form3__button_back)}
			>
				Back
			</Button>
			<Button
				type="submit"
				onClick={onSubmitHandle}
				id="button-send"
				className={classNames(styles.form3__button_submit)}
			>
				Submit
			</Button>
		</div>
	);
}

export default FormPart3;
