import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";

import { selectFormSubmit } from "@features/formSubmit/formSubmitSlice";

export type FormData = {
	nickname: string;
	name: string;
	sername: string;
	sex: "man" | "woman";
	advantages: string[];
	checkbox: number[];
	radio: number;
	about: string;
};

export function CustomForm() {
	const {
		handleSubmit,
		//formState: { errors },
	} = useForm<FormData>();

	const step = useAppSelector(selectFormStep);
	const formSubmit = useAppSelector(selectFormSubmit);
	const onSubmit = handleSubmit(() => {
		console.log(formSubmit);
	});

	//console.log(formSubmit);

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={onSubmit}>
			{step === 1 && <FormPart1 />}
			{step === 2 && <FormPart2 />}
			{step === 3 && <FormPart3 />}
		</form>
	);
}

export default CustomForm;
