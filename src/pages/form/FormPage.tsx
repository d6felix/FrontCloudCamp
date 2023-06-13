import { CustomForm } from "@components/CustomForm";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormProgress } from "@components/FormProgress";
import styles from "./FormPage.module.scss";
import classNames from "classnames";

export function FormPage() {
	const step = useAppSelector(selectFormStep);

	return (
		<div className={classNames(styles.formPage)}>
			<FormProgress step={step} />
			<CustomForm />
		</div>
	);
}

export default FormPage;
