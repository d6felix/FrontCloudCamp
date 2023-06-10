import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";

type FormPartProps = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FormPart3({ setStep }: FormPartProps) {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();
	return (
		<div>
			<label>About:</label>
			<textarea {...register("about")}></textarea>
			<button type="button" onClick={() => setStep(2)}>
				Back
			</button>
			<button type="submit">Submit</button>
		</div>
	);
}

export default FormPart3;
