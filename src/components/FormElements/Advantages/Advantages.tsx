import { ErrorTip } from "@components/ErrorTip";
import { Button } from "../Button";
import { useId } from "react-id-generator";
import {
	Control,
	FieldErrors,
	UseFormRegister,
	useFieldArray,
} from "react-hook-form";
import { FormData } from "@schema/RegistrationForm";
import RemoveIcon from "@assets/RemoveIcon.svg";
import styles from "./Advantages.module.scss";
import classNames from "classnames";

type AdvantagesProps = {
	control: Control<FormData, unknown>;
	register: UseFormRegister<FormData>;
	//inputName: keyof FormData;
	//label?: string;
	className?: string;
	errors: FieldErrors<FormData>;
	//type?: string;
};

export function Advantages({
	control,
	register,
	errors,
	className,
}: AdvantagesProps) {
	const { fields, append, remove } = useFieldArray({
		control,
		name: "advantages",
	});

	const advantagesLength = fields.length;
	const advantagesId: React.Key[] = useId(advantagesLength, "advantages");
	const advantages = Array.from({ length: advantagesLength }).map(
		(_, index) => {
			return (
				<div key={advantagesId[index]} id="field-advantages">
					<input
						className={styles.advantages__input}
						{...register(`advantages.${index}.value`)}
						id={`field-advantages-${index + 1}`}
					/>
					<div
						className={styles.adVantages__delete}
						onClick={() => remove(index)}
						id={`button-remove-${index + 1}`}
					>
						<img src={RemoveIcon} alt="remove" />
					</div>
					<ErrorTip>
						{errors.advantages ? errors.advantages[index]?.message : ""}
					</ErrorTip>
				</div>
			);
		}
	);
	const addAdvantages = () => {
		append({ value: "" });
	};

	return (
		<fieldset className={classNames(styles.advantages, className)}>
			<label htmlFor="field-advantages">
				<p>Advantages:</p>
				{advantages}
			</label>
			<Button
				type="button"
				onClick={addAdvantages}
				id="button-add"
				style="border"
			>
				+
			</Button>
		</fieldset>
	);
}

export default Advantages;
