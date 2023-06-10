import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@hooks/reduxHooks";
import { increment } from "@features/formStep/formStepSlice";

export function FormPart1() {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();

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
				<button type="button">Back</button>
			</Link>
			<button type="button" onClick={() => dispatch(increment())}>
				Next
			</button>
		</div>
	);
}

export default FormPart1;
