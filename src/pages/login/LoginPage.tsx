import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import {
	FormData,
	LoginPageData,
	loginPageSchema,
} from "@schema/RegistrationForm";
import { useAppDispatch } from "@hooks/reduxHooks";
import { updateForm } from "@features/formSubmit/formSubmitSlice";

import { withHookFormMask } from "use-mask-input";
import { LoginHeader } from "@components/LoginHeader";
import { resetFormStep } from "@features/formStep/formStepSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { phonenumberTransform } from "@utils/helperFunctions";
import { FormInput, Button } from "@components/FormElements";

export function LoginPage() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		resolver: yupResolver(loginPageSchema),
		defaultValues: {
			phoneNumber: 9175156001,
			email: "d6felix@gmail.com",
		},
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleStart = (data: LoginPageData) => {
		dispatch(updateForm(data));
		dispatch(resetFormStep());
		navigate("/create");
	};

	return (
		<div className={styles.loginPage}>
			<LoginHeader />
			<form
				onSubmit={(...args) => void handleSubmit(handleStart)(...args)}
				className={styles.loginPage__form}
			>
				<FormInput
					className={styles.loginPage__phone}
					type="tel"
					{...withHookFormMask(
						register("phoneNumber", {
							setValueAs: phonenumberTransform,
						}),
						["+7 (999) 999-99-99"]
					)}
					inputName={"phoneNumber"}
					inputLabel="Phone Number"
					errors={errors.phoneNumber?.message}
					length="l"
				/>

				<FormInput
					className={styles.loginPage__email}
					type="email"
					{...register("email")}
					inputName={"email"}
					errors={errors.email?.message}
					length="l"
				/>
				<Button
					type="submit"
					id="button-start"
					className={styles.loginPage__button}
				>
					Start
				</Button>
			</form>
		</div>
	);
}

export default LoginPage;
