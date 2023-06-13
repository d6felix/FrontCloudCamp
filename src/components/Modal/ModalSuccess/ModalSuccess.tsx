import { Link } from "react-router-dom";
import styles from "./ModalSuccess.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@hooks/reduxHooks";
import { hideModal } from "@features/showModal/showModalSlice";

export function ModalSuccess() {
	const dispatch = useAppDispatch();
	return (
		<div className={classNames(styles.modal)}>
			<h1>Form send successfull</h1>
			<Link to={"/"}>
				<button
					type="button"
					onClick={() => dispatch(hideModal())}
					id="button-to-main"
				>
					Back to main page
				</button>
			</Link>
		</div>
	);
}

export default ModalSuccess;
