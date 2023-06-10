import { useForm } from "react-hook-form";
import { FormData } from "@components/CustomForm";
import { useId } from "react-id-generator";

type FormPartProps = {
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FormPart2({ setStep }: FormPartProps) {
	const {
		register,
		//	formState: { errors },
	} = useForm<FormData>();

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
			<button type="button" onClick={() => setStep(1)}>
				Back
			</button>
			<button type="button" onClick={() => setStep(3)}>
				Next
			</button>
		</div>
	);
}

export default FormPart2;
