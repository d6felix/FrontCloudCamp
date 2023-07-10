import { ModalError } from "./ModalError";
import { ModalSuccess } from "./ModalSuccess";
import styles from "./Modal.module.scss";
import { useAppSelector } from "~store/reduxHooks";
import { selectShowModal } from "~store/showModal/showModalSlice";
import { WithLoader } from "~components/FormElements/WithLoader";

export function Modal() {
	const modalState = useAppSelector(selectShowModal);

	return modalState.show ? (
		<div className={styles.modal}>
			<div className={styles.modal__body}>
				<WithLoader loading={modalState.isSuccessfull === undefined}>
					{modalState.isSuccessfull ? <ModalSuccess /> : <ModalError />}
				</WithLoader>
			</div>
		</div>
	) : (
		<></>
	);
}

export default Modal;
