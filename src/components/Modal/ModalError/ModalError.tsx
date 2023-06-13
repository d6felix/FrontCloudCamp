import { ModalState } from "@components/CustomForm";
import styles from "./ModalError.module.scss";
import classNames from "classnames";

type ModalErrorProps = {
	setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
};

export function ModalError({ setModalState }: ModalErrorProps) {
	return (
		<div className={classNames(styles.modal)}>
			<h1>Error</h1>
			<button
				type="button"
				onClick={() => setModalState({ isSuccessfull: false, show: false })}
				id="button-close"
			>
				Close
			</button>
		</div>
	);
}

export default ModalError;
