import { useId } from "react-id-generator";
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
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	// eslint-disable-next-line no-console
	const onSubmit = handleSubmit((data) => console.log(data));

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
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={onSubmit}>
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
			<label>About:</label>
			<textarea {...register("about")}></textarea>
		</form>
	);
}

export default CustomForm;
