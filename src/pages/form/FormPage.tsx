import "./FormPage.scss";
import { CustomForm } from "@components/CustomForm";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";

export function FormPage() {
	const step = useAppSelector(selectFormStep);

	return (
		<div>
			<p>{`Current step: ${step}`}</p>
			<CustomForm />
		</div>
	);
}

export default FormPage;
