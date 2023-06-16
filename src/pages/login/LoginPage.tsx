import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { FormData, loginPageSchema } from "@schema/RegistrationForm";
import { useAppDispatch } from "@hooks/reduxHooks";
import { updateForm } from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { withHookFormMask } from "use-mask-input";
import { LoginHeader } from "@components/LoginHeader";
import { resetFormStep } from "@features/formStep/formStepSlice";
import { Button } from "@components/FormElements/Button";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorTip } from "@components/ErrorTip";
import { phonenumberTransform } from "@utils/helperFunctions";

export function LoginPage() {
	const {
		register,
		setValue,
		getValues,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: yupResolver(loginPageSchema),
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setValue("phoneNumber", 9175156001);
		setValue("email", "d6felix@gmail.com");
	}, []);

	const onStart = () => {
		dispatch(updateForm(getValues()));
		dispatch(resetFormStep());
		if (!errors.email && !errors.phoneNumber) {
			navigate("/create");
		}
	};

	return (
		<div className={classNames(styles.loginPage)}>
			<LoginHeader />
			<form className={classNames(styles.loginPage__form)}>
				<label
					className={classNames(
						styles.loginPage__label,
						styles.loginPage__label_phone
					)}
				>
					Phone number
					<input
						className={classNames(styles.loginPage__input)}
						type="tel"
						{...withHookFormMask(
							register("phoneNumber", {
								setValueAs: phonenumberTransform,
							}),
							["+7 (999) 999-99-99"]
						)}
					/>
					<ErrorTip className={classNames(styles.loginPage__errorTip)}>
						{errors.phoneNumber?.message}
					</ErrorTip>
				</label>
				<label
					className={classNames(
						styles.loginPage__label,
						styles.loginPage__label_email
					)}
				>
					E-mail
					<input
						type="email"
						{...register("email")}
						className={classNames(styles.loginPage__input)}
					/>
					<ErrorTip className={classNames(styles.loginPage__errorTip)}>
						{errors.email?.message}
					</ErrorTip>
				</label>
				<Button
					type="button"
					onClick={(...args) => void handleSubmit(onStart)(...args)}
					id="button-start"
					className={classNames(styles.loginPage__button)}
				>
					Start
				</Button>
			</form>
		</div>
	);
}

export default LoginPage;
