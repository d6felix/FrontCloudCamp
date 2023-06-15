import styles from "./ModalError.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@hooks/reduxHooks";
import { hideModal } from "@features/showModal/showModalSlice";
import CrossClose from "@assets/CrossClose.svg";
import ModalRedError from "@assets/ModalRedError.svg";
import { Button } from "@components/FormElements/Button";

export function ModalError() {
	const dispatch = useAppDispatch();
	return (
		<div className={classNames(styles.modal__error)}>
			<h1 className={classNames(styles.modal__title)}>Error</h1>
			<img
				src={CrossClose}
				alt="close modal"
				onClick={() => dispatch(hideModal())}
				className={classNames(styles.modal__closeIcon)}
			/>
			<img
				src={ModalRedError}
				alt="error icon"
				className={classNames(styles.modal__errorIcon)}
			/>
			<Button
				type="button"
				onClick={() => dispatch(hideModal())}
				id="button-close"
				className={styles.modal__button}
			>
				Close
			</Button>
		</div>
	);
}

export default ModalError;
