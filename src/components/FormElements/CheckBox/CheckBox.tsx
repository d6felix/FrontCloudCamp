import classNames from "classnames";
import styles from "./CheckBox.module.scss";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "@schema/RegistrationForm";

export type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
	register: UseFormRegister<FormData>;
	label: keyof FormData;
	value: number;
	id: string;
};

export function CheckBox({
	register,
	label,
	value,
	id,
	...props
}: CheckBoxProps) {
	return (
		<label className={classNames(styles.checkbox)} htmlFor={id}>
			<input
				{...props}
				type="checkbox"
				id={id}
				value={value}
				{...register(label)}
				className={classNames(styles.checkbox__original_hidden)}
			/>
			<div className={classNames(styles.checkbox__custom)} />
			{value}
		</label>
	);
}

export default CheckBox;
