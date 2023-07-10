import { CustomForm } from "~components/CustomForm";
import { useAppSelector, selectFormStep } from "~store";

import { FormProgress } from "~components/FormProgress";
import styles from "./FormPage.module.scss";

export function FormPage() {
	const step = useAppSelector(selectFormStep);

	return (
		<div className={styles.formPage}>
			<FormProgress step={step} />
			<CustomForm />
		</div>
	);
}

export default FormPage;
