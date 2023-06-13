import styles from "./ModalError.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@hooks/reduxHooks";
import { hideModal } from "@features/showModal/showModalSlice";

export function ModalError() {
	const dispatch = useAppDispatch();
	return (
		<div className={classNames(styles.modal)}>
			<h1>Error</h1>
			<button
				type="button"
				onClick={() => dispatch(hideModal())}
				id="button-close"
			>
				Close
			</button>
		</div>
	);
}

export default ModalError;
