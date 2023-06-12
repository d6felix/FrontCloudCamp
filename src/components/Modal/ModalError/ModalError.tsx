import styles from "./ModalError.module.scss";
import classNames from "classnames";

export function ModalError() {
	return <div className={classNames(styles.modal)}>ModalError</div>;
}

export default ModalError;
