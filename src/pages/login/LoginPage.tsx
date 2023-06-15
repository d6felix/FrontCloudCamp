/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch } from "@hooks/reduxHooks";
import { updateForm } from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { withHookFormMask } from "use-mask-input";
import { LoginHeader } from "@components/LoginHeader";
import { resetFormStep } from "@features/formStep/formStepSlice";
import { Button } from "@components/Button";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDataSchema } from "@schema/yupFormSchema";
import { ErrorTip } from "@components/ErrorTip";

export function LoginPage() {
	const {
		register,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: yupResolver(formDataSchema),
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setValue("phoneNumber", 9175156001);
		setValue("email", "d6felix@gmail.com");
	}, []);

	const phonenumberTransform = (phoneNumber: number | string) => {
		if (typeof phoneNumber === "number") {
			return phoneNumber;
		} else if (typeof phoneNumber === "string") {
			return +phoneNumber.replace(/\D/g, "").slice(1);
		}
	};

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
			<form>
				<label>
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
					<ErrorTip>{errors.phoneNumber?.message}</ErrorTip>
				</label>
				<label>
					E-mail
					<input
						type="email"
						{...register("email")}
						className={classNames(styles.loginPage__input)}
					/>
					<ErrorTip>{errors.email?.message}</ErrorTip>
				</label>
				<Button type="button" onClick={onStart} id="button-start">
					Start
				</Button>
			</form>
		</div>
	);
}

export default LoginPage;
