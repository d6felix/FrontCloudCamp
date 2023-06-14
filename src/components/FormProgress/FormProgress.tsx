import classNames from "classnames";
import styles from "./FormProgress.module.scss";
import CheckMark from "@assets/CheckMark.svg";
import { memo } from "react";

type FormProgressProps = {
	step: number;
};

export function FormProgress({ step }: FormProgressProps) {
	return (
		<div className={classNames(styles.formProgress)}>
			<div
				data-step={step}
				className={classNames(styles.formProgress__container_progress)}
			>
				{step > 1 ? (
					<img
						src={CheckMark}
						alt="chekmark"
						className={classNames(
							styles.formProgress__step_completed,
							styles.formProgress__step
						)}
					/>
				) : (
					<div
						className={classNames(
							step === 1 ? styles.formProgress__step_current : "",
							styles.formProgress__step
						)}
					/>
				)}
				{step > 2 ? (
					<img
						src={CheckMark}
						alt="chekmark"
						className={classNames(
							styles.formProgress__step_completed,
							styles.formProgress__step
						)}
					/>
				) : (
					<div
						className={classNames(
							step === 2 ? styles.formProgress__step_current : "",
							styles.formProgress__step
						)}
					/>
				)}
				<div
					className={classNames(
						step === 3 ? styles.formProgress__step_current : "",
						styles.formProgress__step
					)}
				/>
			</div>
			<div className={classNames(styles.formProgress__container_labels)}>
				<p className={classNames(styles.formProgress__label)}>1</p>
				<p className={classNames(styles.formProgress__label)}>2</p>
				<p className={classNames(styles.formProgress__label)}>3</p>
			</div>
		</div>
	);
}

export default memo(FormProgress);
