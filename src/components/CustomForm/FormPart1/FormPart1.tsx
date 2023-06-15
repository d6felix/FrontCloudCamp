import { useForm } from "react-hook-form";
import { FormData } from "@schema/dataTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { incrementFormStep } from "@features/formStep/formStepSlice";
import {
	updateForm,
	selectFormData,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { Button } from "@components/Button";
import { formDataSchema } from "@schema/yupFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorTip } from "@components/ErrorTip";
import classNames from "classnames";
import styles from "./FormPart1.module.scss";

export function FormPart1() {
	const {
		register,
		getValues,
		setValue,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onBlur",
		resolver: yupResolver(formDataSchema),
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

	const backHandle = () => {
		dispatch(updateForm(getValues()));
		navigate("/");
	};
	const nextStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(incrementFormStep());
	};

	return (
		<div className={classNames(styles.form1)}>
			<label>
				Nickname
				<input
					className={classNames(styles.form1__input)}
					{...register("nickname")}
					id="field-nickname"
				/>
				<ErrorTip>{errors.nickname?.message}</ErrorTip>
			</label>
			<label>
				Name
				<input
					className={classNames(styles.form1__input)}
					{...register("name")}
					id="field-name"
				/>
				<ErrorTip>{errors.name?.message}</ErrorTip>
			</label>
			<label>
				Surname
				<input
					className={classNames(styles.form1__input)}
					{...register("surname")}
					id="field-surname"
				/>
				<ErrorTip>{errors.surname?.message}</ErrorTip>
			</label>
			<label htmlFor="field-sex">
				Sex
				<select id="field-sex" placeholder="Not selected" {...register("sex")}>
					<option value="man" id="field-sex-option-man">
						Man
					</option>
					<option value="woman" id="field-sex-option-woman">
						Woman
					</option>
				</select>
			</label>
			<Button
				type="button"
				onClick={backHandle}
				id="button-back"
				style="border"
			>
				Back
			</Button>
			<Button type="button" onClick={nextStepHandle} id="button-next">
				Next
			</Button>
		</div>
	);
}

export default FormPart1;
