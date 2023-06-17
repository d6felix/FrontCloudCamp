import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";

export function CustomForm() {
	const step = useAppSelector(selectFormStep);

	return (
		<>
			<div>
				{step === 1 && <FormPart1 />}
				{step === 2 && <FormPart2 />}
				{step === 3 && <FormPart3 />}
			</div>
		</>
	);
}

export default CustomForm;
