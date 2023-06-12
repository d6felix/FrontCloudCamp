/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormData } from "@schema/dataTypes";
import { formDataSchema } from "@schema/yupFormSchema";
import { ModalSuccess, ModalError } from "@components/Modal";

import {
	selectFormData,
	useAddFormDataMutation,
} from "@features/formSubmit/formSubmitSlice";
import { createPortal } from "react-dom";
import { useState } from "react";

export function CustomForm() {
	const {
		handleSubmit,
		//formState: { errors },
	} = useForm<FormData>();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [submitSuccess, setSubmitSuccess] = useState<boolean>(true);

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
		<>
			<form onSubmit={onSubmit}>
				{step === 1 && <FormPart1 />}
				{step === 2 && <FormPart2 />}
				{step === 3 && <FormPart3 />}
			</form>{" "}
			{createPortal(
				<>{showModal && (submitSuccess ? <ModalSuccess /> : <ModalError />)}</>,
				document.body
			)}
		</>
	);
}

export default CustomForm;
