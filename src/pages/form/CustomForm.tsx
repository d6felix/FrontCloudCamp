import "./CustomForm.scss";
import { useForm } from "react-hook-form";

type FormData = {
	nickname: string;
	name: string;
	sername: string;
	sex: "man" | "woman";
	advantages: string[];
	checkbox: number[];
	radio: number;
	about: string;
};

export function CustomForm() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	// eslint-disable-next-line no-console
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={onSubmit}>
			<label>Nickname</label>
			<input {...register("nickname")} />
			<label>Name</label>
			<input {...register("name")} />
			<label>Sername</label>
			<input {...register("sername")} />
			<label>sex</label>
			<input {...register("sex")} />
			<label>About:</label>

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
			<textarea {...register("about")}></textarea>
		</form>
	);
}

export default CustomForm;
