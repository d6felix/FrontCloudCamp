import { FormPart1 } from "./FormPart1/FormPart1";
import { FormPart2 } from "./FormPart2/FormPart2";
import { FormPart3 } from "./FormPart3/FormPart3";
import { useForm } from "react-hook-form";

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

type CustomFormProps = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function CustomForm({ step, setStep }: CustomFormProps) {
	const {
		handleSubmit,
		//formState: { errors },
	} = useForm<FormData>();
	// eslint-disable-next-line no-console
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={onSubmit}>
			{step === 1 && <FormPart1 setStep={setStep} />}
			{step === 2 && <FormPart2 setStep={setStep} />}
			{step === 3 && <FormPart3 setStep={setStep} />}
		</form>
	);
}

export default CustomForm;
