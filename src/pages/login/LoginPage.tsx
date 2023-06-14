import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch } from "@hooks/reduxHooks";
import { updateForm } from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { withHookFormMask } from "use-mask-input";
import { LoginHeader } from "@components/LoginHeader";
import { resetFormStep } from "@features/formStep/formStepSlice";
import { Button } from "@components/Button";
import classNames from "classnames";

export function LoginPage() {
	const {
		register,
		setValue,
		getValues,
		//formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();

	useEffect(() => {
		setValue("phoneNumber", "9175156001");
		setValue("email", "d6felix@gmail.com");
	}, []);

	const onSubmit = () => {
		dispatch(updateForm(getValues()));
		dispatch(resetFormStep());
	};

	return (
		<div className={classNames(styles.loginPage)}>
			<LoginHeader />
			<form>
				<label>
					Phone number
					<input
						type="tel"
						{...withHookFormMask(register("phoneNumber"), [
							"+7 (999) 999-99-99",
						])}
					/>
				</label>
				<label>
					E-mail
					<input type="email" {...register("email")} />
				</label>
				<Link to={"create"}>
					<Button type="submit" onClick={onSubmit} id="button-start">
						Start
					</Button>
				</Link>
			</form>
		</div>
	);
}

export default LoginPage;
