import { Link } from "react-router-dom";
import styles from "./ModalSuccess.module.scss";
import classNames from "classnames";

export function ModalSuccess() {
	return (
		<div className={classNames(styles.modal)}>
			<h1>Form send successfull</h1>
			<Link to={"/"}>
				<button type="button" id="button-to-main">
					Back to main page
				</button>
			</Link>
		</div>
	);
}

export default ModalSuccess;
