import { useForm } from "react-hook-form";
import "./Login.scss";
import { Link } from "react-router-dom";

type FormLoginData = {
	phoneNumber: number;
	email: string;
};

export function Login() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormLoginData>();
	const onSubmit = (data: unknown) => {
		console.log(data);
	};

	return (
		<form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
			<label>
				Phone number
				<input type="tel" {...register("phoneNumber")} />
			</label>
			<label>
				E-mail
				<input type="email" {...register("email")} />
			</label>
			<button
				type="button"
				onClick={() => {
					setValue("phoneNumber", 897654321);
					setValue("email", "example@test.com");
				}}
			>
				SetValue
			</button>
			<Link to={"create"}>
				<button type="button">Начать</button>
			</Link>
		</form>
	);
}

export default Login;
