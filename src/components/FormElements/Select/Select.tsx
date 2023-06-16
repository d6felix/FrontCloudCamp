import classNames from "classnames";
import styles from "./Select.module.scss";
import { UseFormRegister } from "react-hook-form/dist/types";
import { FormData } from "@schema/RegistrationForm/dataTypes";
import { memo } from "react";
import { useId } from "react-id-generator";
import { capitalizeFirstLetter } from "@utils/helperFunctions";

type SelectProps = {
	register: UseFormRegister<FormData>;
	label: keyof FormData;
	options: string[];
};

export function Select({ register, label, options }: SelectProps) {
	const checkboxId: React.Key[] = useId(options.length, label);
	const labelCapitalized = capitalizeFirstLetter(label);
	const optionsList = options.map((value, index) => (
		<option
			key={checkboxId[index]}
			value={value}
			id={`field-${label}-option-${value}`}
			className={classNames(styles.select__option)}
		>
			{value}
		</option>
	));

	return (
		<label htmlFor={`field-${label}`}>
			{labelCapitalized}
			<div className={classNames(styles.select)}>
				<select
					id={`field-${label}`}
					placeholder="Not selected"
					{...register(label)}
					className={classNames(styles.select__base)}
				>
					{optionsList}
				</select>
			</div>
		</label>
	);
}

export default memo(Select);
