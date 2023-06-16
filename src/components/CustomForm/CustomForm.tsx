import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormData, formDataSchema } from "@schema/RegistrationForm";
import { Modal } from "@components/Modal";

import {
	selectFormData,
	useAddFormDataMutation,
} from "@features/formSubmit/formSubmitSlice";
import { createPortal } from "react-dom";
import {
	showModalSuccess,
	showModalError,
} from "@features/showModal/showModalSlice";

export function CustomForm() {
	const { handleSubmit } = useForm<FormData>();

	const dispatch = useAppDispatch();

	const [addFormData] = useAddFormDataMutation();
	const step = useAppSelector(selectFormStep);
	const formSubmit = useAppSelector(selectFormData);
	const onSubmit = async () => {
		if (formDataSchema.isValidSync(formSubmit)) {
			await addFormData(formSubmit)
				.unwrap()
				.then((payload) =>
					payload.status === "success"
						? dispatch(showModalSuccess())
						: dispatch(showModalError())
				)
				.catch(() => dispatch(showModalError()));
		} else {
			dispatch(showModalError());
		}
	};
	return (
		<>
			<form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
				{step === 1 && <FormPart1 />}
				{step === 2 && <FormPart2 />}
				{step === 3 && <FormPart3 />}
			</form>{" "}
			{createPortal(<Modal />, document.body)}
		</>
	);
}

export default CustomForm;
