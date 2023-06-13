import { ModalError } from "./ModalError";
import { ModalSuccess } from "./ModalSuccess";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { ModalState } from "@components/CustomForm";

type ModalProps = {
	modalState: ModalState;
	setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
};

export function Modal({ modalState, setModalState }: ModalProps) {
	return (
		<>
			<div className={classNames(styles.darkBG)} />
			<div className={classNames(styles.modal)}>
				{modalState.isSuccessfull ? (
					<ModalSuccess />
				) : (
					<ModalError setModalState={setModalState} />
				)}
			</div>
		</>
	);
}

export default Modal;
