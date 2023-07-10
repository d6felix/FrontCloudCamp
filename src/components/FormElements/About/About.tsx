import { useAppSelector, selectFormData } from "~store";
import styles from "./About.module.scss";
import { Control, UseFormRegister, useWatch } from "react-hook-form";
import { FormData } from "~schema/RegistrationForm";

import { ErrorTip } from "~components/ErrorTip";
import classNames from "classnames";

type AboutProps = {
	register: UseFormRegister<FormData>;
	control: Control<FormData, unknown>;
	className?: string;
	errors?: string;
};

export function About({ register, control, className, errors }: AboutProps) {
	const savedValues = useAppSelector(selectFormData);
	const watchAbout = useWatch({
		control,
		name: "about",
		defaultValue: savedValues.about,
	}).replaceAll(" ", "");

	return (
		<label
			htmlFor="field-about"
			className={classNames(styles.about, className)}
		>
			<div className={styles.about__container}>
				About
				<textarea
					placeholder={"Type here..."}
					className={styles.about__input}
					{...register("about")}
					id="field-about"
				></textarea>
			</div>
			<ErrorTip className={styles.about__error}>{errors}</ErrorTip>
			<div className={styles.about__count}>
				Symbol count: {watchAbout.length}
			</div>
		</label>
	);
}

export default About;
