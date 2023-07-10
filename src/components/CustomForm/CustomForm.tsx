import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useAppSelector } from "~store/reduxHooks";
import { selectFormStep } from "~store/formStep/formStepSlice";

export function CustomForm() {
	const step = useAppSelector(selectFormStep);

	return (
		<>
			{step === 1 && <FormPart1 />}
			{step === 2 && <FormPart2 />}
			{step === 3 && <FormPart3 />}
		</>
	);
}

export default CustomForm;
