import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormData } from "@schema/dataTypes";
import { formDataSchema } from "@schema/yupFormSchema";

import {
	selectFormData,
	useAddFormDataMutation,
} from "@features/formSubmit/formSubmitSlice";

export function CustomForm() {
	const {
		handleSubmit,
		//formState: { errors },
	} = useForm<FormData>();

	const [addFormData, { isLoading: isUpdating }] = useAddFormDataMutation();
	const step = useAppSelector(selectFormStep);
	const formSubmit = useAppSelector(selectFormData);
	const onSubmit = handleSubmit(() => {
		try {
			console.log(formSubmit);
			formDataSchema.validateSync(formSubmit);
		} catch (ValidationError) {
			console.log(ValidationError);
		}
		//return addFormData(formSubmit).then((response) => console.log(response));
	});

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
