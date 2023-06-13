/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectFormStep } from "@features/formStep/formStepSlice";
import { FormData } from "@schema/dataTypes";
import { formDataSchema } from "@schema/yupFormSchema";
import { Modal } from "@components/Modal";

import {
	selectFormData,
	useAddFormDataMutation,
} from "@features/formSubmit/formSubmitSlice";
import { createPortal } from "react-dom";
import { useState } from "react";

export type ModalState = {
	isSuccessfull: boolean;
	show: boolean;
};

export function CustomForm() {
	const {
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const [modalState, setModalState] = useState<ModalState>({
		isSuccessfull: false,
		show: false,
	});

	const [addFormData, { isLoading: isUpdating }] = useAddFormDataMutation();
	const step = useAppSelector(selectFormStep);
	const formSubmit = useAppSelector(selectFormData);
	//const onSubmit = async () => {
	// if (formDataSchema.isValidSync(formSubmit)) {
	// 	// const submitResult = await addFormData(formSubmit)
	// 	// 	.unwrap()
	// 	// 	.then((payload) => payload.status === "success")
	// 	// 	.catch(() => false);
	// 	setSubmitSuccess(submitResult);
	// } else {
	// 	setSubmitSuccess(false);
	// }
	const onSubmit = () => {
		setModalState({
			isSuccessfull: false,
			show: true,
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{step === 1 && <FormPart1 />}
				{step === 2 && <FormPart2 />}
				{step === 3 && <FormPart3 />}
			</form>{" "}
			{createPortal(
				<>
					{modalState.show && (
						<Modal modalState={modalState} setModalState={setModalState} />
					)}
				</>,
				document.body
			)}
		</>
	);
}

export default CustomForm;
