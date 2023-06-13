import { useForm } from "react-hook-form";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch } from "@hooks/reduxHooks";
import { updateForm } from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { withHookFormMask } from "use-mask-input";
import { LoginHeader } from "@components/LoginHeader";

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
	};

	return (
		<>
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
					<button type="submit" onClick={onSubmit} id="button-start">
						Start
					</button>
				</Link>
			</form>
		</>
	);
}

export default LoginPage;
