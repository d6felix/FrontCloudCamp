import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { useAppDispatch } from "@hooks/reduxHooks";
import { decrement } from "@features/formStep/formStepSlice";

export function FormPart3() {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();

	return (
		<div>
			<label>About:</label>
			<textarea {...register("about")}></textarea>
			<button type="button" onClick={() => dispatch(decrement())}>
				Back
			</button>
			<button type="submit">Submit</button>
		</div>
	);
}

export default FormPart3;
