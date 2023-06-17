import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./FormInput.module.scss";
import {
	RefCallBack,
	UseFormRegister,
	UseFormRegisterReturn,
} from "react-hook-form";
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
} & Partial<UseFormRegisterReturn>;

export const FormInput = forwardRef(function Input(
	{
		register,
		label,
		className = "",
		errors,
		type = "text",
		length = "n",
		...props
	}: InputProps,
	ref: RefCallBack
) {
	const labelCapitalized = useCapitalizeFirstLetter(label);
	const spreadProps = register ? { ...register(label) } : { ...props };
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
				{...spreadProps}
				id={`field-${label}`}
				ref={ref}
			/>
			<ErrorTip>{errors}</ErrorTip>
		</label>
	);
});

export default FormInput;
