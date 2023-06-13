import { ModalError } from "./ModalError";
import { ModalSuccess } from "./ModalSuccess";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectShowModal } from "@features/showModal/showModalSlice";

export function Modal() {
	const modalState = useAppSelector(selectShowModal);

	return modalState.show ? (
		<div className={classNames(styles.darkBG)}>
			<div className={classNames(styles.modal)}>
				{modalState.isSuccessfull ? <ModalSuccess /> : <ModalError />}
			</div>
		</div>
	) : (
		<></>
	);
}

export default Modal;
