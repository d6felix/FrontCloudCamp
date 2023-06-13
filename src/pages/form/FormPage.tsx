import "./FormPage.scss";
import { CustomForm } from "@components/CustomForm";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormProgress } from "@components/FormProgress";

export function FormPage() {
	const step = useAppSelector(selectFormStep);

	return (
		<div>
			<FormProgress step={step} />
			<CustomForm />
		</div>
	);
}

export default FormPage;
