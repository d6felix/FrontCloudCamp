import { useForm } from "react-hook-form";
import { FormData, formPart1Schema } from "@schema/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { incrementFormStep } from "@features/formStep/formStepSlice";
import {
	updateForm,
	selectFormData,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorTip } from "@components/ErrorTip";
import classNames from "classnames";
import styles from "./FormPart1.module.scss";
import { Select } from "@components/FormElements/Select";

export function FormPart1() {
	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart1Schema),
	});

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);
	const navigate = useNavigate();

	useEffect(() => {
		const { nickname, name, surname, sex } = { ...savedValues };
		setValue("nickname", nickname);
		setValue("name", name);
		setValue("surname", surname);
		setValue("sex", sex);
	}, []);

	const handleBack = () => {
		dispatch(updateForm(getValues()));
		navigate("/");
	};

	const handleNextStep = () => {
		dispatch(updateForm(getValues()));
		dispatch(incrementFormStep());
	};

	return (
		<form
			onSubmit={(...args) => void handleSubmit(handleNextStep)(...args)}
			className={classNames(styles.form1)}
		>
			<label
				htmlFor="field-nickname"
				className={classNames(styles.form1__nickname)}
			>
				Nickname
				<input
					className={classNames(styles.form1__input)}
					{...register("nickname")}
					id="field-nickname"
				/>
				<ErrorTip>{errors.nickname?.message}</ErrorTip>
			</label>
			<label htmlFor="field-name" className={classNames(styles.form1__name)}>
				Name
				<input
					className={classNames(styles.form1__input)}
					{...register("name")}
					id="field-name"
				/>
				<ErrorTip>{errors.name?.message}</ErrorTip>
			</label>
			<label
				htmlFor="field-surname"
				className={classNames(styles.form1__surname)}
			>
				Surname
				<input
					className={classNames(styles.form1__input)}
					{...register("surname")}
					id="field-surname"
				/>
				<ErrorTip>{errors.surname?.message}</ErrorTip>
			</label>
			<Select
				register={register}
				label="sex"
				options={["man", "woman"]}
				className={classNames(styles.form1__sex)}
			/>
			<ErrorTip>{errors.sex?.message}</ErrorTip>
			<Button
				type="button"
				onClick={handleBack}
				id="button-back"
				style="border"
				className={classNames(styles.form1__button_back)}
			>
				Back
			</Button>
			<Button
				type="submit"
				id="button-next"
				className={classNames(styles.form1__button_next)}
			>
				Next
			</Button>
		</form>
	);
}

export default FormPart1;
