type FormProgressProps = {
	step: number;
};

export function FormProgress({ step }: FormProgressProps) {
	return <div>{step}</div>;
}

export default FormProgress;
