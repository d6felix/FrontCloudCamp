type FormProgressProps = {
	step: number;
};

export function FormProgress({ step }: FormProgressProps) {
	return <div>FormProgress: {step}</div>;
}

export default FormProgress;
