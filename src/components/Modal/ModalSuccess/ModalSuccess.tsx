import { Link } from "react-router-dom";
import styles from "./ModalSuccess.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@hooks/reduxHooks";
import { hideModal } from "@features/showModal/showModalSlice";
import ModalGreenSuccess from "@assets/ModalGreenSuccess.svg";
import { Button } from "@components/Button";

export function ModalSuccess() {
	const dispatch = useAppDispatch();
	return (
		<div className={classNames(styles.modal__success)}>
			<h1 className={classNames(styles.modal__title)}>Form send successfull</h1>
			<img
				src={ModalGreenSuccess}
				alt="success icon"
				className={classNames(styles.modal__successIcon)}
			/>
			<Link to={"/"}>
				<Button
					type="button"
					onClick={() => dispatch(hideModal())}
					id="button-to-main"
					className={styles.modal__button}
				>
					Back to main
				</Button>
			</Link>
		</div>
	);
}

export default ModalSuccess;
