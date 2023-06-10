import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { useId } from "react-id-generator";
import { useAppDispatch } from "@hooks/reduxHooks";
import { increment, decrement } from "@features/formStep/formStepSlice";

export function FormPart2() {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();

	const dispatch = useAppDispatch();

	const id: React.Key[] = useId(3, "advantages");
	const advantages = Array.from({ length: 3 }).map((_, index) => {
		return (
			<div key={id[index]}>
				<input {...register("advantages")} />
				<button type="button">delete</button>
			</div>
		);
	});

	return (
		<div>
			<label>Advantages:{advantages}</label>
			<fieldset>
				<legend>Checkbox group:</legend>
				<ul>
					<li>
						<label htmlFor="checkbox_1">
							<input
								type="checkbox"
								id="checkbox_1"
								value="1"
								{...register("checkbox")}
							/>
							1
						</label>
					</li>
					<li>
						<label htmlFor="checkbox_2">
							<input
								type="checkbox"
								id="checkbox_2"
								value="2"
								{...register("checkbox")}
							/>
							2
						</label>
					</li>
					<li>
						<label htmlFor="checkbox_3">
							<input
								type="checkbox"
								id="checkbox_3"
								value="3"
								{...register("checkbox")}
							/>
							3
						</label>
					</li>
				</ul>
			</fieldset>

			<fieldset>
				<legend>Radio group:</legend>
				<ul>
					<li>
						<label htmlFor="radio_1">
							<input
								type="radio"
								id="radio_1"
								value="1"
								{...register("radio")}
							/>
							1
						</label>
					</li>
					<li>
						<label htmlFor="radio_2">
							<input
								type="radio"
								id="radio_2"
								value="2"
								{...register("checkbox")}
							/>
							2
						</label>
					</li>
					<li>
						<label htmlFor="radio_3">
							<input
								type="radio"
								id="radio_3"
								value="3"
								{...register("checkbox")}
							/>
							3
						</label>
					</li>
				</ul>
			</fieldset>
			<button type="button" onClick={() => dispatch(decrement())}>
				Back
			</button>
			<button type="button" onClick={() => dispatch(increment())}>
				Next
			</button>
		</div>
	);
}

export default FormPart2;
