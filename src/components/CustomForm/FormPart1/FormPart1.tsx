import { useForm } from "react-hook-form";
import { FormData } from "@schema/dataTypes";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { increment } from "@features/formStep/formStepSlice";
import {
	updateForm,
	selectFormData,
} from "@features/formSubmit/formSubmitSlice";
import { useEffect } from "react";

export function FormPart1() {
	const {
		register,
		getValues,
		setValue,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();
	const savedValues = useAppSelector(selectFormData);

	useEffect(() => {
		const { nickname, name, sername, sex } = { ...savedValues };
		setValue("nickname", nickname);
		setValue("name", name);
		setValue("sername", sername);
		setValue("sex", sex);
	}, []);

	const backHandle = () => {
		dispatch(updateForm(getValues()));
	};
	const nextStepHandle = () => {
		dispatch(updateForm(getValues()));
		dispatch(increment());
	};

	return (
		<div>
			<label>
				Nickname
				<input {...register("nickname")} />
			</label>
			<label>
				Name
				<input {...register("name")} />
			</label>
			<label>
				Sername
				<input {...register("sername")} />
			</label>
			<label htmlFor="sex-select">
				Sex
				<select id="sex-select" placeholder="Not selected" {...register("sex")}>
					<option value="man">Man</option>
					<option value="woman">Woman</option>
				</select>
			</label>
			<Link to={"/"}>
				<button type="button" onClick={backHandle}>
					Back
				</button>
			</Link>
			<button type="button" onClick={nextStepHandle}>
				Next
			</button>
		</div>
	);
}

export default FormPart1;
