import { useForm } from "react-hook-form";
import {
	FormData,
	FormDataPart1,
	formPart1Schema,
} from "@schema/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { incrementFormStep } from "@features/formStep/formStepSlice";
import {
	updateForm,
	selectFormData,
} from "@features/formSubmit/formSubmitSlice";
import { Button } from "@components/FormElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormPart1.module.scss";
import { Select } from "@components/FormElements/Select";
import { FormInput } from "@components/FormElements/FormInput";

export function FormPart1() {
	const savedValues = useAppSelector(selectFormData);
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(formPart1Schema),
		defaultValues: savedValues,
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleBack = () => {
		dispatch(updateForm(getValues()));
		navigate("/");
	};

	const handleNextStep = (data: FormDataPart1) => {
		dispatch(updateForm(data));
		dispatch(incrementFormStep());
	};

	return (
		<form
			onSubmit={(...args) => void handleSubmit(handleNextStep)(...args)}
			className={styles.form1}
		>
			<FormInput
				{...register("nickname")}
				errors={errors.nickname?.message}
				inputName="nickname"
				className={styles.form1__nickname}
			/>
			<FormInput
				{...register("name")}
				errors={errors.name?.message}
				inputName="name"
				className={styles.form1__name}
			/>
			<FormInput
				{...register("surname")}
				errors={errors.surname?.message}
				inputName="surname"
				className={styles.form1__surname}
			/>
			<Select
				register={register}
				label="sex"
				options={["man", "woman"]}
				className={styles.form1__sex}
			/>
			<Button
				type="button"
				onClick={handleBack}
				id="button-back"
				style="border"
				className={styles.form1__button_back}
			>
				Back
			</Button>
			<Button
				type="submit"
				id="button-next"
				className={styles.form1__button_next}
			>
				Next
			</Button>
		</form>
	);
}

export default FormPart1;
