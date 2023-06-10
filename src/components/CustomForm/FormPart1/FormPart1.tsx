import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { Link } from "react-router-dom";

type FormPartProps = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FormPart1({ setStep }: FormPartProps) {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();

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
			<button type="button" onClick={() => setStep(2)}>
				Next
			</button>
		</div>
	);
}

export default FormPart1;
