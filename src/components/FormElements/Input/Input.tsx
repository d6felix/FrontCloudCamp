import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { UseFormRegister } from "react-hook-form";
import { ErrorTip } from "@components/ErrorTip";
import classNames from "classnames";
import { FormData } from "@schema/RegistrationForm";
import { useCapitalizeFirstLetter } from "@utils/helperFunctions";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	register?: UseFormRegister<FormData>;
	label: keyof FormData;
	className?: string;
	errors: string | undefined;
	type?: string;
	length?: "n" | "l";
};

export function Input({
	register,
	label,
	className = "",
	errors,
	type = "text",
	length = "n",
}: InputProps) {
	const labelCapitalized = useCapitalizeFirstLetter(label);
	const props = register ? { ...register(label) } : null;
	return (
		<label
			htmlFor={`field-${label}`}
			className={classNames(styles.input, className)}
		>
			<p>{labelCapitalized}</p>
			<input
				type={type}
				className={classNames(
					styles.input__input,
					`${styles.input__input}_${length}`
				)}
				{...props}
				id={`field-${label}`}
			/>
			<ErrorTip>{errors}</ErrorTip>
		</label>
	);
}

export default Input;
