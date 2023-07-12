import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useAppSelector, selectFormStep } from "~store";

const formParts = [
	<FormPart1 key={1} />,
	<FormPart2 key={2} />,
	<FormPart3 key={3} />,
];

export function CustomForm() {
	const step = useAppSelector(selectFormStep);

	return <>{formParts[step - 1]}</>;
}

export default CustomForm;
