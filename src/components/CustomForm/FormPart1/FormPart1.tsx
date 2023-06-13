import { useForm } from "react-hook-form";
import { FormData } from "@schema/dataTypes";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { incrementFormStep } from "@features/formStep/formStepSlice";
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
		dispatch(incrementFormStep());
	};

	return (
		<div>
			<label>
				Nickname
				<input {...register("nickname")} id="field-nickname" />
			</label>
			<label>
				Name
				<input {...register("name")} id="field-name" />
			</label>
			<label>
				Sername
				<input {...register("sername")} id="field-sername" />
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
			<Link to={"/"}>
				<button type="button" onClick={backHandle} id="button-back">
					Back
				</button>
			</Link>
			<button type="button" onClick={nextStepHandle} id="button-next">
				Next
			</button>
		</div>
	);
}

export default FormPart1;
