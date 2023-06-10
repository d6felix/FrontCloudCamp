import { useState } from "react";
import "./FormPage.scss";
import { CustomForm } from "@components/CustomForm";

export function FormPage() {
	const [step, setStep] = useState<number>(1);

	return <CustomForm step={step} setStep={setStep} />;
}

export default FormPage;
