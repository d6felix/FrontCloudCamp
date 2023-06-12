import { useForm } from "react-hook-form";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import type { FormData } from "@schema/dataTypes";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import {
	selectFormData,
	updateForm,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";
import { withHookFormMask } from "use-mask-input";

export function LoginPage() {
	const {
		register,
		setValue,
		getValues,
		//formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);

	useEffect(() => {
		const { phoneNumber, email } = { ...savedValues };
		setValue("phoneNumber", phoneNumber);
		setValue("email", email);
	}, []);

	const onSubmit = () => {
		dispatch(updateForm(getValues()));
	};

	return (
		<form>
			<label>
				Phone number
				<input
					type="tel"
					{...withHookFormMask(register("phoneNumber"), ["+7 (999) 999-99-99"])}
				/>
			</label>
			<label>
				E-mail
				<input type="email" {...register("email")} />
			</label>
			<Link to={"create"}>
				<button type="submit" onClick={onSubmit}>
					Начать
				</button>
			</Link>
		</form>
	);
}

export default LoginPage;
